export const CREATE_DOCTOR = `
mutation CreateDoctor($input: CreateDoctorInput!) {
  createDoctor(input: $input) {
    firstname
    lastname
    email
    phone
    gender
    address
    department
    token
    rating
    specialization
    experience
    image
    facebooklLink
    linkedinlLink
    instagramlLink
    twitterlLink
    appointments {
      patientId
      patient_email
      patient_phone
      department
      date
      time
      comments
      fees
      status
      description
    }
  }
}
`