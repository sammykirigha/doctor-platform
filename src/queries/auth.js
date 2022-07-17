import { gql } from "@apollo/client";

export const loginQuery = `
mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    username
    email
    password
  }
}
`

export const SIGNUP_USER = gql`
    mutation RegisterUser($input: CreateUserInput!) {
        registerUser(input: $input) {
            username
            email
            password
        }
    }
`;