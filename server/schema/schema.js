// Mongoose models
const SkillCategory = require('../models/SkillCategory');
const Language = require('../models/Language');
const Section = require('../models/Section');
const Content = require('../models/Content');

const { 
    GraphQLObjectType,  
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLID, 
    GraphQLString,
    GraphQLInt
} = require('graphql');
