const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const schema = require('./schema/schema');

const app = express();

app.use(cors()); // relax security applied to an API

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));