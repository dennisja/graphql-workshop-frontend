import React from 'react';
import { render, fireEvent, wait, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import CreateLink from '../../components/CreateLink';
import {
  createLinkMockResponse,
  createLinkVariables,
} from '../../__mocks__/LinksMocks';
import { CREATE_LINK_MUTATION } from '../../graphql/Mutations';
import { ROUTES } from '../../components/Constants';

describe('<CreateLink />', () => {
  afterEach(cleanup);
  it('should create a link successfully', async () => {
    const result = createLinkMockResponse;
    const request = {
      query: CREATE_LINK_MUTATION,
      variables: createLinkVariables,
    };
    const push = jest.fn();
    const history  = {push}
    const { getByPlaceholderText, getByValue } = render(
      <MockedProvider mocks={[{ request, result }]}>
        <CreateLink history={{ push }} />
      </MockedProvider>,
    );

    const titleInput = getByPlaceholderText('title');
    const urlInput = getByPlaceholderText('url');
    const addLinkButton = getByValue('Add Link');

    fireEvent.change(titleInput, {
      target: { name: 'title', value: createLinkVariables.title },
    });
    fireEvent.change(urlInput, {
      target: { name: 'url', value: createLinkVariables.url },
    });
    addLinkButton.click();

    await wait();

    expect(push).toBeCalled();
    expect(push).toHaveBeenCalledWith(ROUTES.links);
  });

  it('should render loader then the error', async () => {
    const request = {
      query: CREATE_LINK_MUTATION,
      variables: createLinkVariables,
    };
    const push = jest.fn();
    const errorMessage = 'Yo';

    const { getByPlaceholderText, getByValue, getByText } = render(
      <MockedProvider
        mocks={[{ request, result: { errors: [{ message: errorMessage }] } }]}
        addTypeName={false}
      >
        <CreateLink history={{ push }} />
      </MockedProvider>,
    );

    const titleInput = getByPlaceholderText('title');
    const urlInput = getByPlaceholderText('url');
    const addLinkButton = getByValue('Add Link');

    fireEvent.change(titleInput, {
      target: { name: 'title', value: createLinkVariables.title },
    });
    fireEvent.change(urlInput, {
      target: { name: 'url', value: createLinkVariables.url },
    });

    addLinkButton.click();
    const loader = getByText(/Loading/i);
    expect(loader.textContent).toContain('Loading');

    await wait();
    const errorRenderer = getByText(new RegExp(errorMessage, 'i'));
    expect(errorRenderer.textContent).toContain(errorMessage);
  });
});
