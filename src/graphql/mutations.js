// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGiver = `mutation CreateGiver($input: CreateGiverInput!) {
  createGiver(input: $input) {
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
export const updateGiver = `mutation UpdateGiver($input: UpdateGiverInput!) {
  updateGiver(input: $input) {
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
export const deleteGiver = `mutation DeleteGiver($input: DeleteGiverInput!) {
  deleteGiver(input: $input) {
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
export const createGiverGroup = `mutation CreateGiverGroup($input: CreateGiverGroupInput!) {
  createGiverGroup(input: $input) {
    id
    name
    givers {
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
}
`;
export const updateGiverGroup = `mutation UpdateGiverGroup($input: UpdateGiverGroupInput!) {
  updateGiverGroup(input: $input) {
    id
    name
    givers {
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
}
`;
export const deleteGiverGroup = `mutation DeleteGiverGroup($input: DeleteGiverGroupInput!) {
  deleteGiverGroup(input: $input) {
    id
    name
    givers {
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
}
`;
