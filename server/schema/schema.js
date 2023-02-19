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
const _ = require('underscore');

const languages = [{}];

// SkillCategory Type
const SkillCategoryType = new GraphQLObjectType({
    name: 'SkillCategory',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        languages: {
            type: new GraphQLList(LanguageType),
            resolve(parent, args) {
                return _.filter(languages, { skillCategoryId: parent.id });
            }
        }
    })
});

// Language Type
const LanguageType = new GraphQLObjectType({
    name: 'Language',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        proficiency: { type: new GraphQLNonNull(GraphQLInt) },
        skillCategoryId: { type: GraphQLID },
    })
});

// Section Type
const SectionType = new GraphQLObjectType({
    name: 'Section',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
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
        heading1: { type: new GraphQLNonNull(GraphQLString) },
        heading2: { type: GraphQLString },
        link: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        sectionId: { type: GraphQLID },
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
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return SkillCategory.findById(args._id);
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
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Language.findById(args._id);
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
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Section.findById(args._id);
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
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Content.findById(args._id);
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // ADD //
        addSkillCategory: {
            type: SkillCategoryType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const skillCategory = new SkillCategory({
                    title: args.title
                });
                return skillCategory.save();
            }
        },
        addLanguage: {
            type: LanguageType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                proficiency: { type: new GraphQLNonNull(GraphQLInt) },
                skillCategoryId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const language = new Language({
                    name: args.name,
                    proficiency: args.proficiency,
                    skillCategoryId: args.skillCategoryId
                });
                return language.save();
            }
        },
        addSection: {
            type: SectionType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const section = new Section({
                    title: args.title
                });
                return section.save();
            }
        },
        addContent: {
            type: ContentType,
            args: {
                heading1: { type: new GraphQLNonNull(GraphQLString) },
                heading2: { type: GraphQLString },
                link: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
                sectionId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const content = new Content({
                    heading1: args.heading1,
                    heading2: args.heading2,
                    link: args.link,
                    image: args.image,
                    sectionId: args.sectionId
                });
                return content.save();
            }
        },

        // DELETE //
        deleteSkillCategory: {
            type: SkillCategoryType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return SkillCategory.findByIdAndRemove(args._id);
            }
        },
        deleteLanguage: {
            type: LanguageType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                SkillCategory.find({ _id: args._id }).then(
                    skillCategories => {
                        skillCategories.forEach(skillCategory => {
                            skillCategory.remove();
                        })
                    }
                )
                return Language.findByIdAndRemove(args._id);
            }
        },
        deleteSection: {
            type: SectionType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Section.findByIdAndRemove(args._id);
            }
        },
        deleteContent: {
            type: ContentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                Section.find({ _id: args._id }).then(
                    sections => {
                        sections.forEach(section => {
                            section.remove();
                        })
                    }
                )
                return Content.findByIdAndRemove(args._id);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});
