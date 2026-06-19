/**
 * Test fixtures matching the backend API response shapes.
 * Kept small but representative (covers all type/status variants).
 */

export const userRolesFixture = [
  {
    id: 'role-superadmin',
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: '2023-01-01',
    status: 'ACTIVE',
    users: [
      {
        id: 'u1',
        name: 'Olivia Rhye',
        avatarUrl: 'https://i.pravatar.cc/80?u=u1',
      },
      {
        id: 'u2',
        name: 'Phoenix Baker',
        avatarUrl: 'https://i.pravatar.cc/80?u=u2',
      },
      {
        id: 'u3',
        name: 'Lana Steiner',
        avatarUrl: 'https://i.pravatar.cc/80?u=u3',
      },
      {
        id: 'u4',
        name: 'Demi Wilkinson',
        avatarUrl: 'https://i.pravatar.cc/80?u=u4',
      },
      {
        id: 'u5',
        name: 'Candice Wu',
        avatarUrl: 'https://i.pravatar.cc/80?u=u5',
      },
      {
        id: 'u6',
        name: 'Natali Craig',
        avatarUrl: 'https://i.pravatar.cc/80?u=u6',
      },
    ],
  },
  {
    id: 'role-deputy',
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: '2023-04-01',
    status: 'INACTIVE',
    users: [
      {
        id: 'u7',
        name: 'Drew Cano',
        avatarUrl: 'https://i.pravatar.cc/80?u=u7',
      },
      {
        id: 'u8',
        name: 'Orlando Diggs',
        avatarUrl: 'https://i.pravatar.cc/80?u=u8',
      },
      {
        id: 'u9',
        name: 'Andi Lane',
        avatarUrl: 'https://i.pravatar.cc/80?u=u9',
      },
    ],
  },
  {
    id: 'role-developer-basic',
    name: 'Developer-basic',
    type: 'SYSTEM-CUSTOM',
    dateCreated: '2023-06-01',
    status: 'ACTIVE',
    users: [
      {
        id: 'u10',
        name: 'Kate Morrison',
        avatarUrl: 'https://i.pravatar.cc/80?u=u10',
      },
      {
        id: 'u11',
        name: 'Koray Okumus',
        avatarUrl: 'https://i.pravatar.cc/80?u=u11',
      },
    ],
  },
]

export const activeRolesFixture = [
  {
    id: 'active-superadmin',
    name: 'Superadmin',
    lastActive: '06/2023',
    isDefault: true,
    selected: true,
  },
  {
    id: 'active-developeradmin',
    name: 'Developeradmin',
    lastActive: '01/2023',
    isDefault: false,
    selected: false,
  },
  {
    id: 'active-supportadmin',
    name: 'Supportadmin',
    lastActive: '10/2022',
    isDefault: false,
    selected: false,
  },
]
