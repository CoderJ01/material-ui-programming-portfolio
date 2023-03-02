import { gql } from "@apollo/client";

export const GET_ALL_AVATARS = gql`
    query {
        avatars {
            picture
        }
    }
`