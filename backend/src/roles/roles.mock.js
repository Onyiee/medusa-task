const FIRST_NAMES = [
  'Olivia',
  'Liam',
  'Emma',
  'Noah',
  'Ava',
  'Ethan',
  'Sophia',
  'Mason',
  'Isabella',
  'Lucas',
  'Mia',
  'James',
];

const LAST_NAMES = [
  'Johnson',
  'Smith',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Lopez',
  'Wilson',
];

function makeUsers(roleId, count) {
  const users = [];
  for (let i = 0; i < count; i += 1) {
    const userId = `${roleId}-user-${i + 1}`;
    const name = `${FIRST_NAMES[i % FIRST_NAMES.length]} ${
      LAST_NAMES[(i + roleId.length) % LAST_NAMES.length]
    }`;
    users.push({
      id: userId,
      name,
      avatarUrl: `https://i.pravatar.cc/80?u=${userId}`,
    });
  }
  return users;
}

const userRoles = [
  {
    id: 'superadmin',
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: '2023-01-01',
    status: 'ACTIVE',
    users: makeUsers('superadmin', 6),
  },
  {
    id: 'merchantadmin',
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: '2023-02-01',
    status: 'ACTIVE',
    users: makeUsers('merchantadmin', 5),
  },
  {
    id: 'supportadmin',
    name: 'supportadmin',
    type: 'DEFAULT',
    dateCreated: '2023-02-01',
    status: 'ACTIVE',
    users: makeUsers('supportadmin', 4),
  },
  {
    id: 'sales-personnel',
    name: 'sales personnel',
    type: 'CUSTOM',
    dateCreated: '2023-03-01',
    status: 'ACTIVE',
    users: makeUsers('sales-personnel', 3),
  },
  {
    id: 'deputy-sales-personnel',
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: '2023-04-01',
    status: 'INACTIVE',
    users: makeUsers('deputy-sales-personnel', 3),
  },
  {
    id: 'developeradmin',
    name: 'Developeradmin',
    type: 'SYSTEM-CUSTOM',
    dateCreated: '2023-05-01',
    status: 'ACTIVE',
    users: makeUsers('developeradmin', 3),
  },
  {
    id: 'developer-basic',
    name: 'Developer-basic',
    type: 'SYSTEM-CUSTOM',
    dateCreated: '2023-06-01',
    status: 'ACTIVE',
    users: makeUsers('developer-basic', 3),
  },
];

const activeRoles = [
  {
    id: 'superadmin',
    name: 'Superadmin',
    lastActive: '06/2023',
    isDefault: true,
    selected: true,
  },
  {
    id: 'developeradmin',
    name: 'Developeradmin',
    lastActive: '01/2023',
    isDefault: false,
    selected: false,
  },
  {
    id: 'supportadmin',
    name: 'Supportadmin',
    lastActive: '10/2022',
    isDefault: false,
    selected: false,
  },
];

export const ROLES_MOCK = { userRoles, activeRoles };
