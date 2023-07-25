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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
