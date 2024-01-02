
# Project Using Mern Stack

 ### Frontend-
 preview link- https://claim-zippy-mern-stack-project-front-end.vercel.app/
   React JS is used.
   
   Redux Toolkit, Saga, RTK Query are used for api call and handle error ,loading and data.
   
   Bootstrap is used for styling.
   
   Hamburgure Menu is used.
   
   CRUD operation can be done in the table.

### Backend-
preview link- https://claim-zippy-mern-stack-project.vercel.app/
  Node JS and Express JS are used for making REST Api.
  
  Diffferent end points are made for CRUD operation for two collections.
  
  Cors is used for cross server request.
    
  ## different endpoints- 
        ### Tariff Table
        For GET/POST-  /tariff 
        For PUT/DELETE-  /tariff/:id 
        ### Document Table
        For GET/POST-  /document 
        For PUT/DELETE-  /document/:id 

        
# Available Scripts
## Backend
In the server directory, you can run:
### `npm init`

installs all the necessary package.

### `node server.js`

starts the server and runs the api
add Mongo_URI="your mongo db url"  in .env file in server directory before running

## Frontend
in the client directory, you can run
### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
