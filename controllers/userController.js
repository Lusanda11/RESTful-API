// ****************** userController.js *********************


const User = require("../models/userModel"); // Import necessary modules.

// The getUsers function retrieves all users from the database.
// ----------------------------------------------------------------------------------------------------------------------------
    exports.getUsers = async function (req, res, next)
    {
        try
        {
            const users = await User.find(); // await User.find() fetches all documents (users) from the User collection.
            res.json(users); // The results are returned in JSON format using res.json(users).
        }
        catch (error)
        {
            next(error); // If an error occurs, it’s passed to the next middleware (typically an error handler) for centralized error handling.
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// The getUserById function retrieves a specific user by their unique MongoDB ID, req.params.id.
// ----------------------------------------------------------------------------------------------------------------------------
    exports.getUserById = async function (req, res, next)
    {
        try
        {
            const user = await User.findById(req.params.id);
            if (!user)
            {
                return res.status(404).json({ message: "User not found" }); // If no user is found, a 404 status and a message are returned.
            }
            res.json(user); // If found, the user data is returned in JSON format.
        }
        catch (error)
        {
            next(error); // Errors are handled by passing them to next(error).
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// The createUser function handles user creation by receiving name and email from the request body (req.body).
// ----------------------------------------------------------------------------------------------------------------------------
    exports.createUser = async function (req, res, next)
    {
        try
        {
            const { name, email } = req.body;
            const newUser = new User({ name, email }); // A new User instance is created with the provided data.
            await newUser.save(); // await newUser.save() saves the user to the database.
            res.status(201).json(newUser); // If successful, a 201 Created status is sent along with the newly created user data.
        }
        catch (error)
        {
            next(error); // If an error occurs during creation, it’s handled by next(error).
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// The updateUser function updates an existing user’s details based on the provided id and new data from req.body.
// ----------------------------------------------------------------------------------------------------------------------------
    exports.updateUser = async function (req, res, next)
    {
        try
        {
            // findByIdAndUpdate updates the specified document and, with { new: true }, returns the updated user.
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user)
            {
                // If no user is found with the provided ID, a 404 status with a “User not found” message is returned.
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user); // If no user is found with the provided ID, a 404 status with a “User not found” message is returned.
        }
        catch (error)
        {
            next(error); // Errors are forwarded to next(error) for handling.
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// The deleteUser function deletes a specific user based on the provided ID (req.params.id).
// ----------------------------------------------------------------------------------------------------------------------------
    exports.deleteUser = async function (req, res, next)
    {
        try
        {
            const user = await User.findByIdAndDelete(req.params.id); // The findByIdAndDelete locates and deletes the user document.
            if (!user)
            {
                // If the user is not found, a 404 status with a “User not found” message is returned.
                return res.status(404).json({ message: "User not found" });
            }
            res.status(204).send(); // On successful deletion, a 204 No Content response is sent to indicate the user was removed.
        }
        catch (error)
        {
            next(error); // Any error that occurs is forwarded to next(error) for error handling.
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------
