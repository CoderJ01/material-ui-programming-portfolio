// Mongoose models
const SkillCategory = require('../models/SkillCategory');
const Language = require('../models/Language');
const Section = require('../models/Section');
const Content = require('../models/Content');
const Description = require('../models/Description');
const Paragraph = require('../models/Paragraph');
const Avatar = require('../models/Avatar');

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
        language: {
            type: new GraphQLList(LanguageType),
            resolve(parent, args) {
                return Language.find({ skillCategoryId: parent.id });
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
        skillCategoryId: { 
            type: SkillCategoryType,
            resolve(parent, args) {
                return SkillCategory.findById(parent.skillCategoryId);
            }
        },
    })
});

// Section Type
const SectionType = new GraphQLObjectType({
    name: 'Section',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: {
            type: new GraphQLList(ContentType),
            resolve(parent, args) {
                return Content.find({ sectionId: parent.id });
            }
        }
    }),
});

// Content Type
const ContentType = new GraphQLObjectType({
    name: 'Content',
    fields: () => ({
        _id: { type: GraphQLID },
        heading1: { type: GraphQLString },
        heading2: { type: GraphQLString },
        link: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        sectionId: { 
            type: SectionType,
            resolve(parent, args) {
                return Section.findById(parent.sectionId);
            }
        },
    })
});

const DescriptionType = new GraphQLObjectType({
    name: 'Description',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) }
    })
});

const ParagraphType = new GraphQLObjectType({
    name: 'Paragraph',
    fields: () => ({
        _id: { type: GraphQLID },
        text: { type: new GraphQLNonNull(GraphQLString) },
    })
});

const AvatarType = new GraphQLObjectType({
    name: 'Avatar',
    fields: () => ({
        _id: { type: GraphQLID },
        picture: { type: new GraphQLNonNull(GraphQLString) }
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
        },
        descriptions: {
            type: new GraphQLList(DescriptionType),
            resolve(parent, args) {
                return Description.find();
            }
        },
        description: {
            type: DescriptionType,
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Description.findById(args._id);
            }
        },
        paragraphs: {
            type: new GraphQLList(ParagraphType),
            resolve(parent, args) {
                return Paragraph.find();
            }
        },
        paragraph: {
            type: ParagraphType,
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Paragraph.findById(args._id);
            }
        },
        avatars: {
            type: new GraphQLList(AvatarType),
            resolve(parent, args) {
                return Avatar.find();
            }
        },
        avatar: {
            type: AvatarType,
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Avatar.findById(args._id);
            }
        },
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
                heading1: { type: GraphQLString },
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
        addDescription: {
            type: DescriptionType,
            args: {
               title: { type: new GraphQLNonNull(GraphQLString) },
               text: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const description = new Description({
                    title: args.title,
                    text: args.text
                });
                return description.save();
            }
        },
        addParagraph: {
            type: ParagraphType,
            args: {
                text: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const paragraph = new Paragraph({
                    text: args.text
                });
                return paragraph.save();
            }
        },
        addAvatar: {
            type: AvatarType,
            args: {
                picture: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const avatar = new Avatar({
                    picture: args.picture
                });
                return avatar.save();
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
