/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFlow = /* GraphQL */ `
  mutation CreateFlow(
    $input: CreateFlowInput!
    $condition: ModelFlowConditionInput
  ) {
    createFlow(input: $input, condition: $condition) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateFlow = /* GraphQL */ `
  mutation UpdateFlow(
    $input: UpdateFlowInput!
    $condition: ModelFlowConditionInput
  ) {
    updateFlow(input: $input, condition: $condition) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteFlow = /* GraphQL */ `
  mutation DeleteFlow(
    $input: DeleteFlowInput!
    $condition: ModelFlowConditionInput
  ) {
    deleteFlow(input: $input, condition: $condition) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const createBiketour = /* GraphQL */ `
  mutation CreateBiketour(
    $input: CreateBiketourInput!
    $condition: ModelBiketourConditionInput
  ) {
    createBiketour(input: $input, condition: $condition) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
export const updateBiketour = /* GraphQL */ `
  mutation UpdateBiketour(
    $input: UpdateBiketourInput!
    $condition: ModelBiketourConditionInput
  ) {
    updateBiketour(input: $input, condition: $condition) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
export const deleteBiketour = /* GraphQL */ `
  mutation DeleteBiketour(
    $input: DeleteBiketourInput!
    $condition: ModelBiketourConditionInput
  ) {
    deleteBiketour(input: $input, condition: $condition) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
