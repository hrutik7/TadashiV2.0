/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserSignup = /* GraphQL */ `
  mutation CreateUserSignup(
    $input: CreateUserSignupInput!
    $condition: ModelUserSignupConditionInput
  ) {
    createUserSignup(input: $input, condition: $condition) {
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
export const updateUserSignup = /* GraphQL */ `
  mutation UpdateUserSignup(
    $input: UpdateUserSignupInput!
    $condition: ModelUserSignupConditionInput
  ) {
    updateUserSignup(input: $input, condition: $condition) {
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
export const deleteUserSignup = /* GraphQL */ `
  mutation DeleteUserSignup(
    $input: DeleteUserSignupInput!
    $condition: ModelUserSignupConditionInput
  ) {
    deleteUserSignup(input: $input, condition: $condition) {
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
export const createUserLogin = /* GraphQL */ `
  mutation CreateUserLogin(
    $input: CreateUserLoginInput!
    $condition: ModelUserLoginConditionInput
  ) {
    createUserLogin(input: $input, condition: $condition) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserLogin = /* GraphQL */ `
  mutation UpdateUserLogin(
    $input: UpdateUserLoginInput!
    $condition: ModelUserLoginConditionInput
  ) {
    updateUserLogin(input: $input, condition: $condition) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserLogin = /* GraphQL */ `
  mutation DeleteUserLogin(
    $input: DeleteUserLoginInput!
    $condition: ModelUserLoginConditionInput
  ) {
    deleteUserLogin(input: $input, condition: $condition) {
      id
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
