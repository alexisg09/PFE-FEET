import { gql } from "graphql-request";


export const getAllAdvices = gql`
{
    query  {
        advices {
          id
          slug
          title
          description
          img
          backgroundImg
          symptomCategories {
            name
            id
          }
        }
      }
`