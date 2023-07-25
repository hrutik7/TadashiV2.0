/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUserSignup = /* GraphQL */ `
  query ListUserSignup {
    listUserSignup {
      id
      username
      email
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        username
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getUserSignup = /* GraphQL */ `
  query GetUserSignup($id: ID!) {
    getUserSignup(id: $id) {
      id
      username
      email
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserSignups = /* GraphQL */ `
  query ListUserSignups(
    $filter: ModelUserSignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserLogin = /* GraphQL */ `
  query GetUserLogin($id: ID!) {
    getUserLogin(id: $id) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserLogins = /* GraphQL */ `
  query ListUserLogins(
    $filter: ModelUserLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      description
      city
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        city
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
