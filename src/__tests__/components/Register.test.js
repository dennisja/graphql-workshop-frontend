import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { wait } from '../../test-utils';

import RegisterUser from '../../components/Register';
import {
  mockCreateUserResponse,
  mockUserVariables,
} from '../../__mocks__/UserMocks';
import { REGISTER_USERS_MUTATION } from '../../graphql/Mutations';

describe('<RegisterUser />', () => {
  afterEach(cleanup)

  it('should render the form correctly', async () => {
    const result = mockCreateUserResponse;
    const request = {
      query: REGISTER_USERS_MUTATION,
      variables: mockUserVariables
    };
    const { getByPlaceholderText, getByValue } = render(
      <MemoryRouter>
        <MockedProvider mocks={[{ request, result }]} addTypename={false}>
          <RegisterUser />
        </MockedProvider>
      </MemoryRouter>,
    );

    const userNameInput = getByPlaceholderText('username');
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('password');
    const firstNameInput = getByPlaceholderText('firstname');
    const lastNameInput = getByPlaceholderText('lastname');
    const registerButton = getByValue('Register');

    expect(userNameInput.getAttribute('name')).toBe('username');
    expect(emailInput.getAttribute('name')).toBe('email');
    expect(passwordInput.getAttribute('name')).toBe('password');
    expect(passwordInput.getAttribute('type')).toBe('password');
    expect(firstNameInput.getAttribute('name')).toBe('firstname');
    expect(lastNameInput.getAttribute('name')).toBe('lastname');
    expect(registerButton.getAttribute('type')).toBe('submit');
  });

  it('should successfully register user', async () => {
    const result = mockCreateUserResponse;
    const request = {
      query: REGISTER_USERS_MUTATION,
      variables: mockUserVariables,
    };
    const push = jest.fn()
    const { getByPlaceholderText, getByValue } = render(
      <MemoryRouter>
        <MockedProvider mocks={[{ request, result }]}>
          <RegisterUser history={{ push }} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const userNameInput = getByPlaceholderText('username');
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('password');
    const firstNameInput = getByPlaceholderText('firstname');
    const lastNameInput = getByPlaceholderText('lastname');
    const registerButton = getByValue('Register');

    fireEvent.change(userNameInput, {
      target: { name: 'username', value: mockUserVariables.username },
    });
    expect(userNameInput.value).toBe(mockUserVariables.username);

    fireEvent.change(emailInput, {
      target: { name: 'email', value: mockUserVariables.email },
    });
    expect(emailInput.value).toBe(mockUserVariables.email);

    fireEvent.change(passwordInput, {
      target: { name: 'password', value: mockUserVariables.password },
    });
    expect(passwordInput.value).toBe(mockUserVariables.password);

    fireEvent.change(firstNameInput, {
      target: { name: 'firstname', value: mockUserVariables.firstName },
    });
    expect(firstNameInput.value).toBe(mockUserVariables.firstName);

    fireEvent.change(lastNameInput, {
      target: { name: 'lastname', value: mockUserVariables.lastName },
    });
    expect(lastNameInput.value).toBe(mockUserVariables.lastName);

    registerButton.click();
    await wait();
    expect(push).toBeCalled()
  });
});
