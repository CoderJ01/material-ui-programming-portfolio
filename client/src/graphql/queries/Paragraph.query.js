import { gql } from '@apollo/client';

export const GET_ALL_PARAGRAPHS = gql`
    query getParagraphs {
        paragraphs {
            text
        }
    }
`