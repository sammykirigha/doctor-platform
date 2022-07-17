export const loginQuery = `
mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    username
    email
    password
  }
}
`

export const signupQuery = `
mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    username
    email
    password
  }
}
`