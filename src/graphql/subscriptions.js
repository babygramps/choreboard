/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHouse = /* GraphQL */ `
  subscription OnCreateHouse($filter: ModelSubscriptionHouseFilterInput) {
    onCreateHouse(filter: $filter) {
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
export const onUpdateHouse = /* GraphQL */ `
  subscription OnUpdateHouse($filter: ModelSubscriptionHouseFilterInput) {
    onUpdateHouse(filter: $filter) {
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
export const onDeleteHouse = /* GraphQL */ `
  subscription OnDeleteHouse($filter: ModelSubscriptionHouseFilterInput) {
    onDeleteHouse(filter: $filter) {
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
export const onCreateHousemate = /* GraphQL */ `
  subscription OnCreateHousemate(
    $filter: ModelSubscriptionHousemateFilterInput
  ) {
    onCreateHousemate(filter: $filter) {
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
export const onUpdateHousemate = /* GraphQL */ `
  subscription OnUpdateHousemate(
    $filter: ModelSubscriptionHousemateFilterInput
  ) {
    onUpdateHousemate(filter: $filter) {
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
export const onDeleteHousemate = /* GraphQL */ `
  subscription OnDeleteHousemate(
    $filter: ModelSubscriptionHousemateFilterInput
  ) {
    onDeleteHousemate(filter: $filter) {
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
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onCreateInvitation(filter: $filter) {
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
export const onUpdateInvitation = /* GraphQL */ `
  subscription OnUpdateInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onUpdateInvitation(filter: $filter) {
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
export const onDeleteInvitation = /* GraphQL */ `
  subscription OnDeleteInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onDeleteInvitation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
