##Hello everyone,
                                                       🚀 Introducing WanderLust – A Traveller's Website ! 🌍✈️
                                                                This is a Full-Stack Web Application 🚀

It is a Website created by me(Akash Chandra Verma). So Basically It is a Traveller's Website, where traveller's find the suitable room to rest, because it was headaque to find suitable places or rooms to rest. So, I created this Website... So Basically this Website is a trailer and movie will come soon...😉

##### Table of Contents #####

-   [Project Overview](#project-overview)
-   [Technologies Used](#technologies-used)
-   [Packages Used](#packages-used)
-   [Key Features](#key-features)
-   [How to Install](#how-to-install)
-   [Challenges & Solutions](#challenges--solutions)
-   [Special Thanks](#special-thanks)
-   [Author](#author)
-   [Project Link](#project-link)
-   [Thank You](#thank-you)

##### Project Overview #####

I'm thrilled to share my latest Full Stack Web Development project, WanderLust! It’s a dynamic and user-friendly platform designed to help travellers explore, share and review their travel experiences. Whether you’re discovering new destinations or revisiting favourite places, WanderLust makes it easier than ever to find inspiration through interactive maps and user-generated content.

##### Technologies Used #####

### Frontend

-    **HTML**: A User Interface Structured Layout.
-    **CSS**: A Excellent Styling With the help of CSS.
-    **JavaScript**: A Logic Building Material.

### Backend

-   **Express.js**: Web application framework for Node.js, providing robust features for web and mobile applications.
-   **Node.js**: JavaScript runtime for server-side development.

### DataBase

-   **MongoDB**: NoSQL database for flexible and scalable data storage.

##### Packages Used #####

### Authentication

-   **Passport.js**: Middleware for user authentication, supporting various strategies.
-   **Dotenv**: Environment variable management for secure configuration.

### Image Storage

-   **Cloudinary**: Seamless image storage and management.

### Maps

-   **Microsoft Azure Bing Map**: Creating interactive maps for travellers.

### Frontend

-   **MVC Architecture**: For structured code organization.
-   **Bootstrap**: For responsive and clean design.
-   **EJS**: Dynamic template rendering.

### Session Management

-   **Connect Flash**: For user-friendly notifications.
-   **Connect Mongo**: MongoDB session store for Express.js.
-   **Express Session**: Ensuring secure session handling.
-   **Cookie Parser**: Middleware for parsing cookies.

### Validation

-   **Joi**: For validating data with ease.

### Object Modeling

-   **Mongoose**: Simplified MongoDB data modeling.

### File Uploads

-   **Multer**: Efficient handling of file uploads.

### Social Authentication

-   **Passport.js**: Providing robust user authentication.
-   **Passport Local**: Providing Local authentication strategy.
-   **Passport Facebook**: Facebook authentication strategy.
-   **Passport Google OAuth20**: Google OAuth2.0 authentication strategy.
-   **Passport Local Mongoose**: Mongoose-specific authentication strategy.

##### Key Features #####

-   **User Authentication:** Secure login, logout, and profile management. 
-   **CRUD Operations:** Easily add, edit, and delete listings. 
-   **Review System:** Leave feedback and reviews on places visited.
-   **Account Management:** Update personal details and passwords with ease.
-   **User Data Security:** Password encryption and hashing for optimal security. 
-   **Interactive Maps:** Using Microsoft Azure Bing Maps for an immersive location experience.
-   **Login with Google:** Authenticate with your Google account for a seamless experience
-   **Login with Facebook:** Easily log in using your Facebook credentials
-   **Login with Email:** Traditional email login for user convenience

##### How to Install #####

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/ShanedraSingh/wanderlust.git]
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of your project:

    Example :-

    ```bash
    #https://cloudinary.com/  (Cloudinary)           Note:(Get Cloudinary Api key)
    CLOUD_NAME=**********
    CLOUD_API_KEY=*****************
    CLOUD_API_SECRET=************************

    #https://WWW.Microsoft Azure Bing Maps.com/       Note:"(Get Microsoft Azure Bing Maps Api Key)
    MAP_TOKEN=********************************************************************************

    #https://www.mongodb.com/ (MongoDb Atlas)        Note:(Get MongoDB Atlas Api key)
    ATLASDB_URL=****************************************************************************************

    #Add Random Secret Key (Type Anything)
    SECRET=***************************************************************************

    #https://console.developers.google.com/          Note:(Google Developer Console) (Get Google ID And SECTRET Key)
    GOOGLE_CLIENT_ID=*******************************************************************
    GOOGLE_CLIENT_SECRET=**********************************************

    #https://developers.facebook.com/ (Facebook Developer Console)        Note:(Get Facebook ID And SECTRET Key)
    FACEBOOK_APP_ID=*******************************************************************
    FACEBOOK_APP_SECRET=****************************************************************************

    #Add redirect URL in Google Developer Console
    GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback

    #Add redirect URL in Facebook Developer Console
    FACEBOOK_CALLBACK_URL=http://localhost:8080/auth/facebook/callback

    ```

    Replace the values with your specific configurations.

4.  **Run the Application:**

    ```bash
    node app.js
    ```

5.  **Open in Your Browser:**

    Open `http://localhost:8080/listings` in your web browser.

##### Challenges & Solutions #####

Encountered challenges, especially with data handling and maping, but implemented efficient solutions. Overcame scalability issues with a well-architectured backend.

##### Special Thanks #####

This project has been an incredible learning journey for me, and I couldn’t have achieved it without the invaluable guidance and inspiration from Shradha Khapra di :) Your mentorship and support have truly been instrumental in my growth. Thank you for being such a powerful source of motivation!

##### Author #####

Akash Chandra Verma \
LinkedIn : https://www.linkedin.com/in/akashchandraverma/

##### Project link #####
https://wanderlust-a-traveller-s-website.onrender.com/  ---->>  A Link to Website where you can creates and uploads listingd..
WanderLust is hosted on a free platform, so loading may take a moment, but it's fully functional and ready for you to explore!

##### Thank You #####

Thank you for exploring Wanderlust! I’d love to hear your perspectives and any feedback you have regarding WanderLust! 😊

---

