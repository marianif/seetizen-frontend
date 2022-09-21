/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      counts
      ownerId
      ownerName
      createdAt
      updatedAt
      articleLikesId
      eventLikesId
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      counts
      ownerId
      ownerName
      createdAt
      updatedAt
      articleLikesId
      eventLikesId
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      counts
      ownerId
      ownerName
      createdAt
      updatedAt
      articleLikesId
      eventLikesId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      ownerId
      ownerName
      ownerAvatarKey
      content
      createdAt
      updatedAt
      articleCommentsId
      eventCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      ownerId
      ownerName
      ownerAvatarKey
      content
      createdAt
      updatedAt
      articleCommentsId
      eventCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      ownerId
      ownerName
      ownerAvatarKey
      content
      createdAt
      updatedAt
      articleCommentsId
      eventCommentsId
    }
  }
`;
export const onCreateVerifiedPhoneNumbers = /* GraphQL */ `
  subscription OnCreateVerifiedPhoneNumbers {
    onCreateVerifiedPhoneNumbers {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVerifiedPhoneNumbers = /* GraphQL */ `
  subscription OnUpdateVerifiedPhoneNumbers {
    onUpdateVerifiedPhoneNumbers {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVerifiedPhoneNumbers = /* GraphQL */ `
  subscription OnDeleteVerifiedPhoneNumbers {
    onDeleteVerifiedPhoneNumbers {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
