const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing You Requested for. does not exist");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  try {
    const mapToken = process.env.MAP_TOKEN; // Ensure your token is stored in environment variables

    // Make a request to Bing Maps API for geocoding
    let location = req.body.listing.location;
    let response = await axios.get(
      `http://dev.virtualearth.net/REST/v1/Locations`,
      {
        params: {
          query: location,
          key: mapToken,
        },
      }
    );

    if (
      response.data &&
      response.data.resourceSets &&
      response.data.resourceSets.length > 0 &&
      response.data.resourceSets[0].resources.length > 0
    ) {
      let coordinates =
        response.data.resourceSets[0].resources[0].point.coordinates;
      let latitude = coordinates[0];
      let longitude = coordinates[1];

      let url = req.file.path;
      let filename = req.file.filename;

      // Create a new listing with geocoded location (latitude and longitude)
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      newListing.image = { url, filename };
      newListing.geometry = {
        type: "Point",
        coordinates: [longitude, latitude],
      };

      let savedListing = await newListing.save();

      console.log(savedListing);
      req.flash("success", "New Listing Created!");
      res.redirect("/listings");
    } else {
      throw new Error("Unable to geocode location using Bing Maps");
    }
  } catch (error) {
    console.error(error);
    req.flash("error", "Failed to create listing.");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing You Requested for. does not exist");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.filter = async (req, res, next) => {
  let { id } = req.params;
  let allListings = await Listing.find({ category: { $all: [id] } });
  console.log(allListings);
  if (allListings.length != 0) {
    res.locals.success = `Listings Find by ${id}`;
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", "Listings is not here !!!");
    res.redirect("/listings");
  }
};

module.exports.search = async (req, res) => {
  console.log(req.query.q);
  let input = req.query.q.trim().replace(/\s+/g, " "); // remove start and end space and middle space remove and middle add one space------
  console.log(input);
  if (input == "" || input == " ") {
    //search value empty
    req.flash("error", "Search value empty !!!");
    res.redirect("/listings");
  }

  // convert every word 1st latter capital and other small---------------
  let data = input.split("");
  let element = "";
  let flag = false;
  for (let index = 0; index < data.length; index++) {
    if (index == 0 || flag) {
      element = element + data[index].toUpperCase();
    } else {
      element = element + data[index].toLowerCase();
    }
    flag = data[index] == " ";
  }
  console.log(element);

  let allListings = await Listing.find({
    title: { $regex: element, $options: "i" },
  });
  if (allListings.length != 0) {
    res.locals.success = "Listings searched by Title";
    res.render("listings/index.ejs", { allListings });
    return;
  }
  if (allListings.length == 0) {
    allListings = await Listing.find({
      category: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Category";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    allListings = await Listing.find({
      country: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Country";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    let allListings = await Listing.find({
      location: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Location";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  const intValue = parseInt(element, 10); // 10 for decimal return - int ya NaN
  const intDec = Number.isInteger(intValue); // check intValue is Number & Not Number return - true ya false

  if (allListings.length == 0 && intDec) {
    allListings = await Listing.find({ price: { $lte: element } }).sort({
      price: 1,
    });
    if (allListings.length != 0) {
      res.locals.success = `Listings searched for less than Rs ${element}`;
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    req.flash("error", "Listings is not here !!!");
    res.redirect("/listings");
  }
};
