// ****************** server.js *********************


// IMport necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    require("dotenv").config();
    const express = require("express");
    const connectDB = require("./config/db");
    const userRoutes = require("./routes/userRoutes");
    const errorHandler = require("./middleware/errorHandler");
// ----------------------------------------------------------------------------------------------------------------------------

    const app = express(); // Initialise express.
    const PORT = process.env.PORT || 3000; // Set the port number to 3000.

    // Connect to database
    connectDB();

    // Middleware to parse JSON
    app.use(express.json());

    // API Routes
    app.use("/api/v1", userRoutes); // Mounts userRoutes.js to the /api/v1 base URL

    // Global error handler
    app.use(errorHandler);

// Start the server.
// ----------------------------------------------------------------------------------------------------------------------------
    app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    });
// ----------------------------------------------------------------------------------------------------------------------------
