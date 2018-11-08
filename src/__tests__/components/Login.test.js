import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Login from '../../components/Login';
import { LOGIN_USER_MUTATION } from '../../graphql/Mutations';
import { ROUTES } from '../../components/Constants';
import { wait } from '../../test-utils';
import { mockLoginVariables, mockLoginResponse } from '../../__mocks__/UserMocks';


describe('<Login />', () => {
  afterEach(cleanup);
  it('should render the right content', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <MockedProvider>
          <Login />
        </MockedProvider>
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');

    expect(inputElement.name).toBe('username');
    expect(passwordInput.type).toBe('password');
    expect(passwordInput.name).toBe('password');
  });

  it('should redirect user to links page on login', async () => {
    const request = {
      query: LOGIN_USER_MUTATION,
      variables: mockLoginVariables,
    };
    const result = mockLoginResponse;
    const push = jest.fn();

    const { getByPlaceholderText, getByValue } = render(
      <MemoryRouter>
        <MockedProvider mocks={[{ request, result }]}>
          <Login history={{ push }} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const submitButton = getByValue('Login');

    fireEvent.change(inputElement, {
      target: { name: 'username', value: mockLoginVariables.username },
    });
    expect(inputElement.value).toBe(mockLoginVariables.username);

    fireEvent.change(passwordInput, {
      target: { name: 'password', value: mockLoginVariables.password },
    });
    expect(passwordInput.value).toBe(mockLoginVariables.password);

    submitButton.click();
    await wait();

    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith(ROUTES.links);
  });

  it('should render the loader', async () => {
    const request = {
      query: LOGIN_USER_MUTATION,
      variables: mockLoginVariables,
    };
    const result = mockLoginResponse;
    const push = jest.fn();

    const { getByPlaceholderText, getByValue, getByText } = render(
      <MemoryRouter>
        <MockedProvider mocks={[{ request, result }]} addTypename={false}>
          <Login history={{ push }} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const submitButton = getByValue('Login');

    fireEvent.change(inputElement, {
      target: { name: 'username', value: mockLoginVariables.username },
    });
    expect(inputElement.value).toBe(mockLoginVariables.username);

    fireEvent.change(passwordInput, {
      target: { name: 'password', value: mockLoginVariables.password },
    });
    expect(passwordInput.value).toBe(mockLoginVariables.password);

    submitButton.click();
    const loadingWidget = getByText(/Loading/);
    expect(loadingWidget.textContent).toBe('Loading.....');
  });

  it('should render the error widget', async () => {
    const request = {
      query: LOGIN_USER_MUTATION,
      variables: mockLoginVariables,
    };
    const errorMessage = 'Sth Went Wrong'
    const push = jest.fn();

    const { getByPlaceholderText, getByValue, getByText } = render(
      <MemoryRouter>
        <MockedProvider mocks={[{ request, error: new Error(errorMessage) }]} addTypename={false}>
          <Login history={{ push }} />
        </MockedProvider>
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const submitButton = getByValue('Login');

    fireEvent.change(inputElement, {
      target: { name: 'username', value: mockLoginVariables.username },
    });
    expect(inputElement.value).toBe(mockLoginVariables.username);

    fireEvent.change(passwordInput, {
      target: { name: 'password', value: mockLoginVariables.password },
    });
    expect(passwordInput.value).toBe(mockLoginVariables.password);

    submitButton.click();
    const loadingWidget = getByText(/Loading/);
    expect(loadingWidget.textContent).toBe('Loading.....');
    await wait()
    const errorWidget = getByText(new RegExp(errorMessage,'i'))
    expect(errorWidget.textContent).toContain(errorMessage)
  });
});
