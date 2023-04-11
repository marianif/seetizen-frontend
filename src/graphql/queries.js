/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlow = /* GraphQL */ `
  query GetFlow($id: ID!) {
    getFlow(id: $id) {
      id
      houseId
      value
      createdAt
      updatedAt
    }
  }
`;
export const listFlows = /* GraphQL */ `
  query ListFlows(
    $filter: ModelFlowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        houseId
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      reservationId
      houseId
      partecipants
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reservationId
        houseId
        partecipants
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBiketour = /* GraphQL */ `
  query GetBiketour($id: ID!) {
    getBiketour(id: $id) {
      id
      partecipants
      partecipantPhoneNumbers
      partecipantsNames
      createdAt
      updatedAt
    }
  }
`;
export const listBiketours = /* GraphQL */ `
  query ListBiketours(
    $filter: ModelBiketourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBiketours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        partecipants
        partecipantPhoneNumbers
        partecipantsNames
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
