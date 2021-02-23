/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const exchangeCoins = /* GraphQL */ `
  mutation ExchangeCoins(
    $coinId: ID!
    $isBuy: Boolean!
    $amount: Float!
    $usdPortfolioCoinId: ID
    $coinPortfolioCoinId: ID
  ) {
    exchangeCoins(
      coinId: $coinId
      isBuy: $isBuy
      amount: $amount
      usdPortfolioCoinId: $usdPortfolioCoinId
      coinPortfolioCoinId: $coinPortfolioCoinId
    )
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
      name
      image
      networth
      PortfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      name
      image
      networth
      PortfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      name
      image
      networth
      PortfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
