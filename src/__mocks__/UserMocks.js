const mockUsers = {
  data: {
    users: [
      {
        id: '2',
        firstName: 'deo',
        lastName: 'Kamara',
        email: 'dk@gmail.com',
        username: 'dk',
      },
      {
        id: '4',
        firstName: 'Dennis',
        lastName: 'Jjagwe',
        email: 'dennisjjagwe@gmail.com',
        username: 'dennisja',
      },
      {
        id: '19',
        firstName: 's',
        lastName: 's',
        email: 'sjj@gmail.com',
        username: 'dej',
      },
      {
        id: '20',
        firstName: 'firstname',
        lastName: 'lastname',
        email: 'test@test.com',
        username: 'test ',
      },
    ],
  },
};

const mockCreateUserResponse = {
  data: {
    createUser: {
      user: {
        id: 29,
        username: 'djx',
      },
    },
  },
};

/**
 * Note: Order of these variables should be similar to the order in the implementation
 * Otherwise Apollo will throw an error
 */
const mockUserVariables = {
  firstName: 'dy',
  email: 'dydx@zmail.com',
  lastName: 'dx',
  password: 'password',
  username: 'djx',
};

const mockLoginResponse = {
  data: {
    login: {
      token: 'mockToken',
    },
  },
};

const mockLoginVariables = {
  username: 'dj',
  password: 'password',
};

export {
  mockUsers,
  mockCreateUserResponse,
  mockUserVariables,
  mockLoginResponse,
  mockLoginVariables,
};
