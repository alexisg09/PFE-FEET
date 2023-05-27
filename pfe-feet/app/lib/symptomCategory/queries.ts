import { gql } from "graphql-request";

export const getAllSymptomCategories = gql`
query getAllSymptomCategories {
    symptomCategories {
      id
      name
      color {
        hex
      }
    }
  }
`