const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDb;