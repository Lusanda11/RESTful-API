// ****************** userRoutes.js *********************


// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    const express = require("express");
    const router = express.Router();
    const userController = require("../controllers/userController");
// ----------------------------------------------------------------------------------------------------------------------------


// Define endpoints and associate them with controller functions.
// ----------------------------------------------------------------------------------------------------------------------------
    router.post("/users", userController.createUser);        // POST /api/v1/users
    router.get("/users", userController.getUsers);           // GET /api/v1/users
    router.get("/users/:id", userController.getUserById);    // GET /api/v1/users/:id
    router.put("/users/:id", userController.updateUser);     // PUT /api/v1/users/:id
    router.delete("/users/:id", userController.deleteUser);  // DELETE /api/v1/users/:id
// ----------------------------------------------------------------------------------------------------------------------------


module.exports = router; // Export necessary modules.
