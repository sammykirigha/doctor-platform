export const CREATE_PATIENT_QUERY = `
 mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    token
    image
    dateOfBirth
    disability
    county
    bloodGroup
    nationality
    maritalStatus
  }
}
`

export const GET_ONE_PATIENT_QUERY = `
query FetchSinglePatient($input: HandleSinglePatientInput!) {
  fetchSinglePatient(input: $input) {
    id
    firstname
    lastname
    email
    phone
    gender
    address
    token
    image
    dateOfBirth
    disability
    county
    bloodGroup
    nationality
    maritalStatus
    appointments {
      id
      patientId
      patient_email
      patient_phone
      department
      doctorId
      patient_firstname
      patient_lastname
      date
      time
      fees
      status
      description
    }
  }
}
`