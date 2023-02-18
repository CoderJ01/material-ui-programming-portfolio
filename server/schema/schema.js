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

// SkillCategory Type
const SkillCategoryType = new GraphQLObjectType({
    name: 'SkillCategory',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLNonNull(GraphQLString) },
        languages: {
            type: new GraphQLList(LanguageType)
        }
    })
});

// Language Type
const LanguageType = new GraphQLObjectType({
    name: 'Language',
    fields: () => ({
        skillCategory: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        proficiency: { type: GraphQLNonNull(GraphQLInt) },
    })
});

// Section Type
const SectionType = new GraphQLObjectType({
    name: 'Section',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLNonNull(GraphQLString) },
        content: {
            type: new GraphQLList(ContentType)
        }
    }),
});

// Content Type
const ContentType = new GraphQLObjectType({
    name: 'Content',
    fields: () => ({
        heading1: { type: GraphQLNonNull(GraphQLString) },
        heading2: { type: GraphQLString },
        link: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) }
    })
});
