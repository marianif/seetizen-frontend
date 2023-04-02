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
