const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

connectDB();

app.use('/graphql', graphqlHTTP({
    graphql: process.env.NODE_ENV === 'development'
}));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));