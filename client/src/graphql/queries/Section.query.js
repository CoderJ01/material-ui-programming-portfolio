import { gql } from '@apollo/client';

export const GET_ALL_SECTIONS_WITH_DETAIL = gql`
    query getSections {
        sections {
            title
            content {
                heading1
                heading2
                link
                image
            }
        }
    }
`