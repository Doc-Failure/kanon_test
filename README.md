For the backend I followed the architecture shown in this site: https://softwareontheroad.com/ideal-nodejs-project-structure/#architecture .
Being a test I didn't generate the boilerplate with yeoman.

# installation:

npm install && npm install --prefix client

# development:

npm run dev

# Server Folder Structure

src
│ index.js # App entry point
└───api # Express route controllers for all the endpoints of the app
└───loaders # Split the startup process into modules
└───services # All the business logic is here
└───types # Type declaration files (d.ts) for Typescript

# Client

└───components # All the components
└───model # All the models for the state manager
└───style # All the CSS

Site is deployed under:
https://k4n0nt3st.herokuapp.com/
