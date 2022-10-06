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

export const GET_APPOINTMENTS_BY_DATE = `
query GetAppointmentsByDate($input: GetAppointmentByDateInput!) {
  getAppointmentsByDate(input: $input) {
    id
    patientId
    patient_email
    patient_phone
    age
    department
    doctorId
    date
    time
    patient_firstname
    patient_lastname
    fees
    status
    description
    appointment_type
    other_type
  }
}
`
