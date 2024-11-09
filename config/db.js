// ****************** db.js *********************


const mongoose = require("mongoose"); // Import mongoose library for connecting to MongoDB.


// Define an asynchronous function to connect to the MongoDB database.
// ----------------------------------------------------------------------------------------------------------------------------
    const connectDB = async function connectDB ()
    {
        try
        {
            await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log("MongoDB connected");
        }
        catch (error)
        {
            console.error("Database connection error:", error.message);
            process.exit(1);
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// Here's a breakdown of the db.js file, explaining each part in detail:
/* -------------------------------------------------------------------------------------------------------------------------- *\
    Here, an asynchronous function connectDB is declared. Since connecting to MongoDB is an I/O operation,
    marking the function as async allows it to handle asynchronous tasks with await.
    The try...catch block is used to handle any errors that may arise during the database connection attempt,
    ensuring that the program doesn't crash unexpectedly.

    process.env.MONGO_URI retrieves the MongoDB URI from environment variables, keeping sensitive information out of the source code for security.
    Options:
    useNewUrlParser: true: Ensures that Mongoose uses the latest MongoDB connection string parser.
    useUnifiedTopology: true: Enables the new unified topology layer for Mongoose, which handles connection monitoring and handling more efficiently.
\* -------------------------------------------------------------------------------------------------------------------------- */


module.exports = connectDB; // Export necessary modules.
