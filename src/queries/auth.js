// import { gql } from "@apollo/client";

export const LOGIN_USER = `
mutation LoginUser($input: LoginUserInput!) {
  loginUser(input: $input) {
    id
    username
    email
    role
    token
    confirmed
  }
}
`


export const SIGNUP_USER = `
    mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    username
    email
    role
    token
    confirmed
  }
}
`;

