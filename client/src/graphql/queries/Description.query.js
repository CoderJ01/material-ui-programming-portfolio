import { gql } from '@apollo/client';

export const GET_ALL_DESCRIPTIONS = gql`
    query getDescriptions {
        descriptions {
            _id
            title
            text
        }
    }
`