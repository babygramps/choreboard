/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHouse = /* GraphQL */
`
  query GetHouse($id: ID!) {
    getHouse(id: $id) {
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
export const listHouses = /* GraphQL */
`
  query ListHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHousemate = /* GraphQL */
`
  query GetHousemate($id: ID!) {
    getHousemate(id: $id) {
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
export const listHousemates = /* GraphQL */
`
  query ListHousemates(
    $filter: ModelHousemateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHousemates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        points
        createdAt
        updatedAt
        houseHousematesId
        housemateUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvitation = /* GraphQL */
`
  query GetInvitation($id: ID!) {
    getInvitation(id: $id) {
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
export const listInvitations = /* GraphQL */
`
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userEmail
        status
        createdAt
        updatedAt
        houseInvitationsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */
`
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      first_name
      last_name
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */
`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        first_name
        last_name
        updatedAt
        userHousemateId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
