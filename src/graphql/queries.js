/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      bio
      label
      credits
      latitude
      longitude
      avatarKey
      tagIDS
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
        nextToken
      }
      joined_groups
      administrated_groups
      articles {
        items {
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
            joined_groups
            administrated_groups
            isVerified
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
          title
          content
          coverKey
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          likes {
            nextToken
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      isVerified
      notificationToken
      phoneNumber
      phonePrefix
      searcheable
      viewport
      createdAt
      updatedAt
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
        name
        bio
        label
        credits
        latitude
        longitude
        avatarKey
        tagIDS
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        viewport
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
            tags
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
            tags
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
        nextToken
      }
      articles {
        items {
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
            joined_groups
            administrated_groups
            isVerified
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
            tags
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
            tags
            tagIDS
            createdAt
            updatedAt
          }
          title
          content
          coverKey
          tags
          publishedAt
          latitude
          longitude
          viewsCount
          viewersIDS
          likes {
            nextToken
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          userArticlesId
          groupArticlesId
        }
        nextToken
      }
      latitude
      longitude
      tags
      tagIDS
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        tagIDS
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
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
            tags
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tags
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
            tags
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
        tags
        tagIDS
        createdAt
        updatedAt
      }
      title
      content
      coverKey
      tags
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
            tags
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tags
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
            tags
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
        tags
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const getInvitation = /* GraphQL */ `
  query GetInvitation($id: ID!) {
    getInvitation(id: $id) {
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
            tags
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tags
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
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
          tags
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
      startsAt
      createdAt
      updatedAt
    }
  }
`;
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
            tags
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
            tags
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
            tags
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
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPartecipation = /* GraphQL */ `
  query GetPartecipation($id: ID!) {
    getPartecipation(id: $id) {
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
export const listPartecipations = /* GraphQL */ `
  query ListPartecipations(
    $filter: ModelPartecipationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartecipations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getReferral = /* GraphQL */ `
  query GetReferral($code: ID!) {
    getReferral(code: $code) {
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
            tags
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tags
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
export const listReferrals = /* GraphQL */ `
  query ListReferrals(
    $code: ID
    $filter: ModelReferralFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReferrals(
      code: $code
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
          viewport
          createdAt
          updatedAt
        }
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($followedId: ID!, $followerId: ID!) {
    getFollowRelationship(followedId: $followedId, followerId: $followerId) {
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
          nextToken
        }
        isVerified
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        viewport
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $followedId: ID
    $followerId: ModelIDKeyConditionInput
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollowRelationships(
      followedId: $followedId
      followerId: $followerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          viewport
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConsent = /* GraphQL */ `
  query GetConsent($id: ID!) {
    getConsent(id: $id) {
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
export const listConsents = /* GraphQL */ `
  query ListConsents(
    $filter: ModelConsentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVerifiedPhoneNumbers = /* GraphQL */ `
  query GetVerifiedPhoneNumbers($phoneNumber: String!) {
    getVerifiedPhoneNumbers(phoneNumber: $phoneNumber) {
      phoneNumber
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listVerifiedPhoneNumbers = /* GraphQL */ `
  query ListVerifiedPhoneNumbers(
    $phoneNumber: String
    $filter: ModelVerifiedPhoneNumbersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVerifiedPhoneNumbers(
      phoneNumber: $phoneNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        phoneNumber
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUsersByPhoneNumber = /* GraphQL */ `
  query ListUsersByPhoneNumber(
    $phoneNumber: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByPhoneNumber(
      phoneNumber: $phoneNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            tags
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
        notificationToken
        phoneNumber
        phonePrefix
        searcheable
        tags
        viewport
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listArticlesByWriter = /* GraphQL */ `
  query ListArticlesByWriter(
    $writerId: ID!
    $publishedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticlesByWriter(
      writerId: $writerId
      publishedAt: $publishedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const listArticlesByDate = /* GraphQL */ `
  query ListArticlesByDate(
    $type: String!
    $publishedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticlesByDate(
      type: $type
      publishedAt: $publishedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const listEventsByOrganizer = /* GraphQL */ `
  query ListEventsByOrganizer(
    $organizerId: ID!
    $startsAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsByOrganizer(
      organizerId: $organizerId
      startsAt: $startsAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const listEventsByPartecipations = /* GraphQL */ `
  query ListEventsByPartecipations(
    $type: String!
    $partecipationsCount: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsByPartecipations(
      type: $type
      partecipationsCount: $partecipationsCount
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
      nextToken
    }
  }
`;
export const listInvitationsByProposer = /* GraphQL */ `
  query ListInvitationsByProposer(
    $proposerId: ID!
    $startsAtEventId: ModelInvitationByProposerCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitationsByProposer(
      proposerId: $proposerId
      startsAtEventId: $startsAtEventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
      nextToken
    }
  }
`;
export const listInvitationsByReceiver = /* GraphQL */ `
  query ListInvitationsByReceiver(
    $receiverId: ID!
    $startsAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitationsByReceiver(
      receiverId: $receiverId
      startsAt: $startsAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
            notificationToken
            phoneNumber
            phonePrefix
            searcheable
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
      nextToken
    }
  }
`;
export const listNotificationByUser = /* GraphQL */ `
  query ListNotificationByUser(
    $receiverId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationByUser(
      receiverId: $receiverId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getReferralByUser = /* GraphQL */ `
  query GetReferralByUser(
    $ownerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReferralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getReferralByUser(
      ownerId: $ownerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
          viewport
          createdAt
          updatedAt
        }
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listFollowByFollower = /* GraphQL */ `
  query ListFollowByFollower(
    $followerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowByFollower(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
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
          notificationToken
          phoneNumber
          phonePrefix
          searcheable
          tags
          viewport
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
