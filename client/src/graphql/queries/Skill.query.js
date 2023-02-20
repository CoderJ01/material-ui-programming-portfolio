import { gql } from '@apollo/client';

export const GET_ALL_SKILL_CATEGORIES_WITH_DETAILS = gql`
    query getSkillCategories {
        skillCategories {
            title
            language {
                name
                proficiency
            }
        }
    } 
`