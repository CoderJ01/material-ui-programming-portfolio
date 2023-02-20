import { gql } from '@apollo/client';

export const GET_A_SINGLE_DESCRIPTION = gql`
    query getDescription($id: ID!) {
        description(id: $id) {
            _id
            title
            text
        }
    }
`