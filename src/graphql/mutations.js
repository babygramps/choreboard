/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHouse = /* GraphQL */ `
  mutation CreateHouse(
    $input: CreateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    createHouse(input: $input, condition: $condition) {
      id
      name
      housemates {
        nextToken
        __typename
      }
      invitations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHouse = /* GraphQL */ `
  mutation UpdateHouse(
    $input: UpdateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    updateHouse(input: $input, condition: $condition) {
      id
      name
      housemates {
        nextToken
        __typename
      }
      invitations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHouse = /* GraphQL */ `
  mutation DeleteHouse(
    $input: DeleteHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    deleteHouse(input: $input, condition: $condition) {
      id
      name
      housemates {
        nextToken
        __typename
      }
      invitations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHousemate = /* GraphQL */ `
  mutation CreateHousemate(
    $input: CreateHousemateInput!
    $condition: ModelHousemateConditionInput
  ) {
    createHousemate(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        email
        createdAt
        updatedAt
        userHousemateId
        __typename
      }
      points
      createdAt
      updatedAt
      houseHousematesId
      housemateUserId
      __typename
    }
  }
`;
export const updateHousemate = /* GraphQL */ `
  mutation UpdateHousemate(
    $input: UpdateHousemateInput!
    $condition: ModelHousemateConditionInput
  ) {
    updateHousemate(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        email
        createdAt
        updatedAt
        userHousemateId
        __typename
      }
      points
      createdAt
      updatedAt
      houseHousematesId
      housemateUserId
      __typename
    }
  }
`;
export const deleteHousemate = /* GraphQL */ `
  mutation DeleteHousemate(
    $input: DeleteHousemateInput!
    $condition: ModelHousemateConditionInput
  ) {
    deleteHousemate(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        email
        createdAt
        updatedAt
        userHousemateId
        __typename
      }
      points
      createdAt
      updatedAt
      houseHousematesId
      housemateUserId
      __typename
    }
  }
`;
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      userEmail
      status
      createdAt
      updatedAt
      houseInvitationsId
      __typename
    }
  }
`;
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      userEmail
      status
      createdAt
      updatedAt
      houseInvitationsId
      __typename
    }
  }
`;
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
      id
      house {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      userEmail
      status
      createdAt
      updatedAt
      houseInvitationsId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      housemate {
        id
        points
        createdAt
        updatedAt
        houseHousematesId
        housemateUserId
        __typename
      }
      createdAt
      updatedAt
      userHousemateId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      housemate {
        id
        points
        createdAt
        updatedAt
        houseHousematesId
        housemateUserId
        __typename
      }
      createdAt
      updatedAt
      userHousemateId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      housemate {
        id
        points
        createdAt
        updatedAt
        houseHousematesId
        housemateUserId
        __typename
      }
      createdAt
      updatedAt
      userHousemateId
      __typename
    }
  }
`;
