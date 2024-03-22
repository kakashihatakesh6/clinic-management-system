const mongoose = require('mongoose');

// Paste your mongouri here @Swati
const mongoURI = "mongodb+srv://dfjlejf dfjlf ";

connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
    await mongoose.connect(mongoURI);
    await console.log("Connected to Mongoose Successfully!");
}


module.exports = connectToMongo