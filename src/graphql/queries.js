// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGiver = `query GetGiver($id: ID!) {
  getGiver(id: $id) {
    id
    name
    exclude
    assignedTo {
      id
      name
      exclude
    }
  }
}
`;
export const listGivers = `query ListGivers(
  $filter: ModelGiverFilterInput
  $limit: Int
  $nextToken: String
) {
  listGivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      exclude
      assignedTo {
        id
        name
        exclude
      }
    }
    nextToken
  }
}
`;
