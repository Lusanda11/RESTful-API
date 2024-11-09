// ****************** userModel.js *********************


const mongoose = require("mongoose"); // Import necessary modules.

// Creating the User Schema.
// ----------------------------------------------------------------------------------------------------------------------------
    const userSchema = new mongoose.Schema(
    {
        // Defines a new schema called userSchema using mongoose.Schema, which outlines the structure and rules for documents within the User collection.
        name:
        {
            type: String,
            required: true,
            trim: true,
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    });
// ----------------------------------------------------------------------------------------------------------------------------

// Schema Fields:
/* -------------------------------------------------------------------------------------------------------------------------- *\
    name field:
        type: String: Specifies that name must be a string.
        required: true: Indicates that name is a mandatory field.
        trim: true: Ensures that any whitespace at the beginning or end of the name value is removed.
    email field:
        type: String: Specifies that email must be a string.
        required: true: Ensures email is required.
        unique: true: Enforces uniqueness, so no two users can have the same email.
        trim: true: Trims whitespace from the email field as well.
\* -------------------------------------------------------------------------------------------------------------------------- */


module.exports = mongoose.model("User", userSchema); // Export necessary modules.
