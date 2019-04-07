// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($Id: [Int]!) {
  getUser(Id: $Id) {
    Id
    name
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      Id
      name
    }
    nextToken
  }
}
`;
