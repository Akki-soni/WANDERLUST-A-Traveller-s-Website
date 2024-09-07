const map = new maplibregl.Map({
  container: "map", //container ID
  zoom: 9, //starting zoom
  center: [77.2088, 28.6139], // starting position [longitudes,latitudes]
  //Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style:
    "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL", //Style URL
});
