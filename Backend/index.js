//importing express from express in index for server conection.it a backend frame work
import express from 'express';

//importing port and mongodbconnection url from pre definned confiq file 
import { PORT, mongoDBURL } from './config.js';

// import mongoose for data validation with a schema 
import mongoose from 'mongoose';

//importing cors 
import cors from 'cors';

import bookRoutes from './Routes/bookRoutes.js';
// Create an instance of an Express application
const app = express();

//to use passing body it not using you can get error
app.use(express.json());

//seting midleware to app
app.use(cors());

//rout for directing request
app.use('/books', bookRoutes);


// initiates a connection to a MongoDB database using Mongoose.
//The Mongoose library is being used to interact with MongoDB.
mongoose
    .connect(mongoDBURL)
    //This is a Promise method
    .then(() => {
        console.log("App connected to database");
        //This line starts the Express application server and tells it to listen for incoming HTTP requests on a specific port.
        app.listen(PORT, () => {
            console.log(`app is listening to port:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Database connection filed",error);
        process.exit(1); // Exit the process if the database connection fails

    });