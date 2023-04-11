/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFlow = /* GraphQL */ `
  subscription OnCreateFlow($filter: ModelSubscriptionFlowFilterInput) {
    onCreateFlow(filter: $filter) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFlow = /* GraphQL */ `
  subscription OnUpdateFlow($filter: ModelSubscriptionFlowFilterInput) {
    onUpdateFlow(filter: $filter) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFlow = /* GraphQL */ `
  subscription OnDeleteFlow($filter: ModelSubscriptionFlowFilterInput) {
    onDeleteFlow(filter: $filter) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onUpdateReservation(filter: $filter) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onDeleteReservation(filter: $filter) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBiketour = /* GraphQL */ `
  subscription OnCreateBiketour($filter: ModelSubscriptionBiketourFilterInput) {
    onCreateBiketour(filter: $filter) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBiketour = /* GraphQL */ `
  subscription OnUpdateBiketour($filter: ModelSubscriptionBiketourFilterInput) {
    onUpdateBiketour(filter: $filter) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBiketour = /* GraphQL */ `
  subscription OnDeleteBiketour($filter: ModelSubscriptionBiketourFilterInput) {
    onDeleteBiketour(filter: $filter) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
