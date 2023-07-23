/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserSignup = /* GraphQL */ `
  subscription OnCreateUserSignup(
    $filter: ModelSubscriptionUserSignupFilterInput
  ) {
    onCreateUserSignup(filter: $filter) {
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
export const onUpdateUserSignup = /* GraphQL */ `
  subscription OnUpdateUserSignup(
    $filter: ModelSubscriptionUserSignupFilterInput
  ) {
    onUpdateUserSignup(filter: $filter) {
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
export const onDeleteUserSignup = /* GraphQL */ `
  subscription OnDeleteUserSignup(
    $filter: ModelSubscriptionUserSignupFilterInput
  ) {
    onDeleteUserSignup(filter: $filter) {
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
export const onCreateUserLogin = /* GraphQL */ `
  subscription OnCreateUserLogin(
    $filter: ModelSubscriptionUserLoginFilterInput
  ) {
    onCreateUserLogin(filter: $filter) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserLogin = /* GraphQL */ `
  subscription OnUpdateUserLogin(
    $filter: ModelSubscriptionUserLoginFilterInput
  ) {
    onUpdateUserLogin(filter: $filter) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserLogin = /* GraphQL */ `
  subscription OnDeleteUserLogin(
    $filter: ModelSubscriptionUserLoginFilterInput
  ) {
    onDeleteUserLogin(filter: $filter) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
      id
      username
      gender
      describe
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
      id
      username
      gender
      describe
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
      id
      username
      gender
      describe
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
