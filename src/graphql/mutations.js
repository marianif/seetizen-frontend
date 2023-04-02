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
