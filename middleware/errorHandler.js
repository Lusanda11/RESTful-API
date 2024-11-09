// ****************** errorHandler.js *********************


// Error Handler Declaration.
// ----------------------------------------------------------------------------------------------------------------------------
    const errorHandler = (err, req, res, next)
    {
        // Declares a middleware function, errorHandler, that takes four parameters: err, req, res, and next.
        console.error(err.stack); // This logs the stack trace of the error to the console, which can be useful for debugging and diagnosing issues on the server.
        res.status(500).json({ message: err.message || "Server Error" }); // Sets the HTTP status code to 500, indicating a server error.
    };
// ----------------------------------------------------------------------------------------------------------------------------

module.exports = errorHandler; // Export necessary modules.
