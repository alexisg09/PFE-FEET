import { gql } from "graphql-request";


export const getAllSymptoms = gql`
{
    symptoms {
      createdAt
      id
      intensity
      isFromSensors
      name
      symptomCategory {
        color {
          hex
          css
        }
        id
        name
      }
    }
  }
`


export const getAllSymptomsByCategoryName = gql`
query MyQuery($categoryName: String!) {
    symptoms(where: { symptomCategory: { name: $categoryName } }) {
      id
      intensity
      isFromSensors
      name
      createdAt
      coordinates
    }
  }
`


