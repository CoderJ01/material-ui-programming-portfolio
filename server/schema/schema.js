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
        name: { type: GraphQLNonNull(GraphQLString) },
        proficiency: { type: GraphQLNonNull(GraphQLInt) },
        skillCategory: { type: GraphQLID },
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
        _id: { type: GraphQLID },
        heading1: { type: GraphQLNonNull(GraphQLString) },
        heading2: { type: GraphQLString },
        link: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        skillCategories: {
            type: new GraphQLList(SkillCategoryType),
            resolve(parent, args) {
                return SkillCategory.find();
            }
        },
        skillCategory: {
            type: SkillCategoryType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return SkillCategory.findById(args.id);
            }
        },
        languages: {
            type: new GraphQLList(LanguageType),
            resolve(parent, args) {
                return Language.find();
            }
        },
        language: {
            type: LanguageType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Language.findById(args.id);
            }
        },
        sections: {
            type: new GraphQLList(SectionType),
            resolve(parent, args) {
                return Section.find();
            }
        },
        section: {
            type: SectionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Section.findById(args.id);
            }
        },
        contents: {
            type: new GraphQLList(ContentType),
            resolve(parent, args) {
                return Content.find();
            }
        },
        content: {
            type: ContentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Content.findById(args.id);
            }
        }
    }
});
