/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      bio
      label
      credits
      latitude
      longitude
      avatarKey
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      createdEvent {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      joined_groups
      administrated_groups
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      isVerified
      verificationCount
      notificationToken
      phoneNumber
      phonePrefix
      searcheable
      tagIDS
      viewport
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
      name
      bio
      label
      credits
      latitude
      longitude
      avatarKey
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      createdEvent {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      joined_groups
      administrated_groups
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      isVerified
      verificationCount
      notificationToken
      phoneNumber
      phonePrefix
      searcheable
      tagIDS
      viewport
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
      name
      bio
      label
      credits
      latitude
      longitude
      avatarKey
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      createdEvent {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      joined_groups
      administrated_groups
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      isVerified
      verificationCount
      notificationToken
      phoneNumber
      phonePrefix
      searcheable
      tagIDS
      viewport
      createdAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      label
      bio
      credits
      adminsIDS
      editorsIDS
      membersIDS
      bannedIDS
      avatarKey
      category
      events {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      latitude
      longitude
      tagIDS
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      label
      bio
      credits
      adminsIDS
      editorsIDS
      membersIDS
      bannedIDS
      avatarKey
      category
      events {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      latitude
      longitude
      tagIDS
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      label
      bio
      credits
      adminsIDS
      editorsIDS
      membersIDS
      bannedIDS
      avatarKey
      category
      events {
        items {
          id
          organizerId
          type
          partecipationsCount
          title
          description
          label
          url
          startsAt
          address
          location
          latitude
          longitude
          coverKey
          tagIDS
          tags
          createdAt
          updatedAt
          userCreatedEventId
          groupEventsId
        }
        nextToken
      }
      articles {
        items {
          id
          writerId
          type
          title
          content
          coverKey
          tagIDS
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      latitude
      longitude
      tagIDS
      createdAt
      updatedAt
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      writerId
      type
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      title
      content
      coverKey
      tagIDS
      publishedAt
      latitude
      longitude
      viewsCount
      viewersIDS
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userArticlesId
      groupArticlesId
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      writerId
      type
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      title
      content
      coverKey
      tagIDS
      publishedAt
      latitude
      longitude
      viewsCount
      viewersIDS
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userArticlesId
      groupArticlesId
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      writerId
      type
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      title
      content
      coverKey
      tagIDS
      publishedAt
      latitude
      longitude
      viewsCount
      viewersIDS
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userArticlesId
      groupArticlesId
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      organizerId
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      type
      partecipationsCount
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      title
      description
      label
      url
      startsAt
      address
      location
      latitude
      longitude
      coverKey
      tagIDS
      tags
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userCreatedEventId
      groupEventsId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      organizerId
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      type
      partecipationsCount
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      title
      description
      label
      url
      startsAt
      address
      location
      latitude
      longitude
      coverKey
      tagIDS
      tags
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userCreatedEventId
      groupEventsId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      organizerId
      user {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      group {
        id
        name
        label
        bio
        credits
        adminsIDS
        editorsIDS
        membersIDS
        bannedIDS
        avatarKey
        category
        events {
          nextToken
        }
        articles {
          nextToken
        }
        latitude
        longitude
        tagIDS
        createdAt
        updatedAt
      }
      type
      partecipationsCount
      partecipations {
        items {
          id
          partecipantName
          partecipantAvatarKey
          count
          createdAt
          updatedAt
          userPartecipationsId
          eventPartecipationsId
        }
        nextToken
      }
      title
      description
      label
      url
      startsAt
      address
      location
      latitude
      longitude
      coverKey
      tagIDS
      tags
      likes {
        items {
          id
          counts
          ownerId
          ownerName
          createdAt
          updatedAt
          articleLikesId
          eventLikesId
        }
        nextToken
      }
      comments {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
      userCreatedEventId
      groupEventsId
    }
  }
`;
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
      id
      proposerId
      proposer {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      receivers {
        items {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        nextToken
      }
      receiverId
      eventId
      message
      event {
        id
        organizerId
        user {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        group {
          id
          name
          label
          bio
          credits
          adminsIDS
          editorsIDS
          membersIDS
          bannedIDS
          avatarKey
          category
          latitude
          longitude
          tagIDS
          createdAt
          updatedAt
        }
        type
        partecipationsCount
        partecipations {
          nextToken
        }
        title
        description
        label
        url
        startsAt
        address
        location
        latitude
        longitude
        coverKey
        tagIDS
        tags
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedEventId
        groupEventsId
      }
      startsAt
      createdAt
      updatedAt
    }
  }
`;
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
      id
      proposerId
      proposer {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      receivers {
        items {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        nextToken
      }
      receiverId
      eventId
      message
      event {
        id
        organizerId
        user {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        group {
          id
          name
          label
          bio
          credits
          adminsIDS
          editorsIDS
          membersIDS
          bannedIDS
          avatarKey
          category
          latitude
          longitude
          tagIDS
          createdAt
          updatedAt
        }
        type
        partecipationsCount
        partecipations {
          nextToken
        }
        title
        description
        label
        url
        startsAt
        address
        location
        latitude
        longitude
        coverKey
        tagIDS
        tags
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedEventId
        groupEventsId
      }
      startsAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
      id
      proposerId
      proposer {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      receivers {
        items {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        nextToken
      }
      receiverId
      eventId
      message
      event {
        id
        organizerId
        user {
          id
          name
          bio
          label
          credits
          latitude
          longitude
          avatarKey
          joined_groups
          administrated_groups
          isVerified
          verificationCount
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tagIDS
          viewport
          createdAt
          updatedAt
        }
        group {
          id
          name
          label
          bio
          credits
          adminsIDS
          editorsIDS
          membersIDS
          bannedIDS
          avatarKey
          category
          latitude
          longitude
          tagIDS
          createdAt
          updatedAt
        }
        type
        partecipationsCount
        partecipations {
          nextToken
        }
        title
        description
        label
        url
        startsAt
        address
        location
        latitude
        longitude
        coverKey
        tagIDS
        tags
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedEventId
        groupEventsId
      }
      startsAt
      createdAt
      updatedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      receiverId
      senderId
      senderName
      header
      body
      objectId
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      receiverId
      senderId
      senderName
      header
      body
      objectId
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      receiverId
      senderId
      senderName
      header
      body
      objectId
      type
      createdAt
      updatedAt
    }
  }
`;
export const createPartecipation = /* GraphQL */ `
  mutation CreatePartecipation(
    $input: CreatePartecipationInput!
    $condition: ModelPartecipationConditionInput
  ) {
    createPartecipation(input: $input, condition: $condition) {
      id
      partecipantName
      partecipantAvatarKey
      count
      createdAt
      updatedAt
      userPartecipationsId
      eventPartecipationsId
    }
  }
`;
export const updatePartecipation = /* GraphQL */ `
  mutation UpdatePartecipation(
    $input: UpdatePartecipationInput!
    $condition: ModelPartecipationConditionInput
  ) {
    updatePartecipation(input: $input, condition: $condition) {
      id
      partecipantName
      partecipantAvatarKey
      count
      createdAt
      updatedAt
      userPartecipationsId
      eventPartecipationsId
    }
  }
`;
export const deletePartecipation = /* GraphQL */ `
  mutation DeletePartecipation(
    $input: DeletePartecipationInput!
    $condition: ModelPartecipationConditionInput
  ) {
    deletePartecipation(input: $input, condition: $condition) {
      id
      partecipantName
      partecipantAvatarKey
      count
      createdAt
      updatedAt
      userPartecipationsId
      eventPartecipationsId
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReferral = /* GraphQL */ `
  mutation CreateReferral(
    $input: CreateReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    createReferral(input: $input, condition: $condition) {
      code
      ownerId
      owner {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateReferral = /* GraphQL */ `
  mutation UpdateReferral(
    $input: UpdateReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    updateReferral(input: $input, condition: $condition) {
      code
      ownerId
      owner {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteReferral = /* GraphQL */ `
  mutation DeleteReferral(
    $input: DeleteReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    deleteReferral(input: $input, condition: $condition) {
      code
      ownerId
      owner {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      count
      createdAt
      updatedAt
    }
  }
`;
export const createFollowRelationship = /* GraphQL */ `
  mutation CreateFollowRelationship(
    $input: CreateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    createFollowRelationship(input: $input, condition: $condition) {
      followedId
      followerId
      follower {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      followed {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowRelationship = /* GraphQL */ `
  mutation UpdateFollowRelationship(
    $input: UpdateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    updateFollowRelationship(input: $input, condition: $condition) {
      followedId
      followerId
      follower {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      followed {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowRelationship = /* GraphQL */ `
  mutation DeleteFollowRelationship(
    $input: DeleteFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    deleteFollowRelationship(input: $input, condition: $condition) {
      followedId
      followerId
      follower {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      followed {
        id
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        partecipations {
          nextToken
        }
        createdEvent {
          nextToken
        }
        joined_groups
        administrated_groups
        articles {
          nextToken
        }
        isVerified
        verificationCount
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tagIDS
        viewport
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConsent = /* GraphQL */ `
  mutation CreateConsent(
    $input: CreateConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    createConsent(input: $input, condition: $condition) {
      id
      userId
      username
      acceptedPrivacyPolicy
      acceptedCookiePolicy
      acceptedTermsAndConditions
      privacyPolicyURL
      cookiePolicyURL
      termsAndConditionsURL
      createdAt
      updatedAt
    }
  }
`;
export const updateConsent = /* GraphQL */ `
  mutation UpdateConsent(
    $input: UpdateConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    updateConsent(input: $input, condition: $condition) {
      id
      userId
      username
      acceptedPrivacyPolicy
      acceptedCookiePolicy
      acceptedTermsAndConditions
      privacyPolicyURL
      cookiePolicyURL
      termsAndConditionsURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteConsent = /* GraphQL */ `
  mutation DeleteConsent(
    $input: DeleteConsentInput!
    $condition: ModelConsentConditionInput
  ) {
    deleteConsent(input: $input, condition: $condition) {
      id
      userId
      username
      acceptedPrivacyPolicy
      acceptedCookiePolicy
      acceptedTermsAndConditions
      privacyPolicyURL
      cookiePolicyURL
      termsAndConditionsURL
      createdAt
      updatedAt
    }
  }
`;
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      id
      userId
      username
      reportedEventId
      reportedUserId
      reason
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      id
      userId
      username
      reportedEventId
      reportedUserId
      reason
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
      id
      userId
      username
      reportedEventId
      reportedUserId
      reason
      description
      createdAt
      updatedAt
    }
  }
`;
export const createVerifiedPhoneNumbers = /* GraphQL */ `
  mutation CreateVerifiedPhoneNumbers(
    $input: CreateVerifiedPhoneNumbersInput!
    $condition: ModelVerifiedPhoneNumbersConditionInput
  ) {
    createVerifiedPhoneNumbers(input: $input, condition: $condition) {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
export const updateVerifiedPhoneNumbers = /* GraphQL */ `
  mutation UpdateVerifiedPhoneNumbers(
    $input: UpdateVerifiedPhoneNumbersInput!
    $condition: ModelVerifiedPhoneNumbersConditionInput
  ) {
    updateVerifiedPhoneNumbers(input: $input, condition: $condition) {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
export const deleteVerifiedPhoneNumbers = /* GraphQL */ `
  mutation DeleteVerifiedPhoneNumbers(
    $input: DeleteVerifiedPhoneNumbersInput!
    $condition: ModelVerifiedPhoneNumbersConditionInput
  ) {
    deleteVerifiedPhoneNumbers(input: $input, condition: $condition) {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
