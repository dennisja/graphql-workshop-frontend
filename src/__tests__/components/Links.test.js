import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { render, cleanup } from 'react-testing-library';

import Links from '../../components/LinkList';
import { fetchLinksMockData } from '../../__mocks__/LinksMocks';
import { GET_LINKS_QUERY } from '../../graphql/Queries';
import { wait } from '../../test-utils';

describe('<Links />', () => {
  afterEach(cleanup);
  it('should render loader and then the content', async () => {
    const result = fetchLinksMockData;
    const request = {
      query: GET_LINKS_QUERY,
    };

    const { getByText } = render(
      <MockedProvider mocks={[{ request, result }]}>
        <Links />
      </MockedProvider>,
    );
    const loader = getByText(/Loading/i);
    expect(loader.textContent).toContain('Loading');

    await wait();

    fetchLinksMockData.data.links.forEach((link) => {
      const element = getByText(new RegExp(link.title, 'i'));
      expect(element.textContent).toContain(link.title);
      expect(element.textContent).toContain(link.url);
      expect(element.textContent).toContain(link.postedBy.username);
    });
  });

  it('should render error message when error occurs', async () => {
    const request = {
      query: GET_LINKS_QUERY,
    };

    const errorMessage = 'Shit Happened';
    const result = {
      errors: [{ message: errorMessage }],
    };

    const { getByText } = render(
      <MockedProvider mocks={[{ request, result }]}>
        <Links />
      </MockedProvider>,
    );
    const loader = getByText(/Loading/i);
    expect(loader.textContent).toContain('Loading');

    await wait();

    const errorWidget = getByText(new RegExp(errorMessage, 'i'));
    expect(errorWidget.textContent).toContain(errorMessage);
  });
});
