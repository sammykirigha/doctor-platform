import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation LoginUser($input: LoginUserInput!) {
  loginUser(input: $input) {
    id
    username
    email
    password
    role
    token
    confirmed
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