const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await moongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
}

module.exports = connectDB;