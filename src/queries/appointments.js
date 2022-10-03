export const CREATE_APPOINTMENT = `
 mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    time
    status
    patient_phone
    patient_lastname
    patient_firstname
    id
    patientId
    patient_email
    age
    department
    doctorId
    date
    fees
    description
  }
}
`;
