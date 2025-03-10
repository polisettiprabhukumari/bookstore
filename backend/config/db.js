const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Directly put your MongoDB URI here
        await mongoose.connect("mongodb://localhost:27017/your_database_name", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
