import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { cleanup, render } from 'react-testing-library';

import UsersList from '../../components/Users';
import { mockUsers } from '../../__mocks__/UserMocks';
import { GET_USERS_QUERY } from '../../graphql/Queries';
import { wait } from '../../test-utils';
describe('<UserList />', () => {
  afterEach(cleanup);

  const request = {
    query: GET_USERS_QUERY,
  };

  it('should render the correct content', async () => {
    const result = mockUsers;
    const { getByText } = render(
      <MockedProvider mocks={[{ request, result }]} addTypename={false}>
        <UsersList />
      </MockedProvider>,
    );
    const {
      data: { users },
    } = mockUsers;
    await wait();
    users.forEach((user) => {
      const firstNameHolder = getByText(
        new RegExp(`${user.firstName} ${user.lastName}`, 'ig'),
      );
      const emailHolder = firstNameHolder.nextElementSibling;
      const userNameHolder = emailHolder.nextElementSibling;
      expect(emailHolder.textContent).toBe(`Email: ${user.email}`);
      expect(userNameHolder.textContent).toContain(user.username);
    });
  });

  it('should render no users message', async () => {
    const noUsersAlert = 'No registered users';
    const result = { data: { users: [] } };
    const { getByText } = render(
      <MockedProvider mocks={[{ request, result }]} addTypename={false}>
        <UsersList />
      </MockedProvider>,
    );
    await wait();
    const noUsersWidget = getByText(noUsersAlert);
    expect(noUsersWidget.textContent).toEqual(noUsersAlert);
  });

  it('should render the loading component', () => {
    const { getByText } = render(
      <MockedProvider mocks={[]}>
        <UsersList />
      </MockedProvider>,
    );
    const loader = getByText(/Loading/);
    expect(loader.textContent).toBe('Loading....');
  });

  it('should render the network error', async () => {
    const errorMessage = 'Network Failed';
    const { getByText } = render(
      <MockedProvider mocks={[{ request, error: new Error(errorMessage) }]}>
        <UsersList />
      </MockedProvider>,
    );
    await wait();
    const errorWidget = getByText(new RegExp(errorMessage, 'i'));
    expect(errorWidget.textContent).toContain(errorMessage);
  });

  it('should render the graphql error', async () => {
    const errorMessage = 'Could not fetch users';
    const { getByText } = render(
      <MockedProvider
        mocks={[{ request, result: { errors: [{ message: errorMessage }] } }]}
      >
        <UsersList />
      </MockedProvider>,
    );
    await wait();
    const errorWidget = getByText(new RegExp(errorMessage, 'i'));
    expect(errorWidget.textContent).toContain(errorMessage);
  });
});
