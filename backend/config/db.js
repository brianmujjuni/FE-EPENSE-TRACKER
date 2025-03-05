const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        console.log("Connecting to MongoDB...");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDb;