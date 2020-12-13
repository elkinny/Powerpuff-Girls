import React from 'react';
import { render } from '@testing-library/react';

import SeriesDetails from './SeriesDetails';

jest.mock('../InfoCard', () => () => 'InfoCard');
jest.mock('./EpisodesList', () => () => 'EpisodesList');
jest.mock('react-redux', () => ({
  useSelector: () => ({}),
}));
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ }),
}));

describe('SeriesDetails', () => {
  test('renders SeriesDetails component', () => {
    const { container } = render(<SeriesDetails />);

    expect(container).toMatchSnapshot();
  });
});

describe('getProps', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('return formed data', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({
        name: 'name',
        image: {
          original: '/img.png',
        },
        summary: 'summary',
        genres: 'genres',
        language: 'language',
        status: 'status',
        type: 'type',
        rating: { average: 1 },
        _embedded: {
          episodes: [],
        },
      }),
    }));

    const result = await SeriesDetails.getProps();

    expect(result).toMatchSnapshot();
  });

  test('return formed data when data is empty', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(null),
    }));

    const result = await SeriesDetails.getProps();

    expect(result).toMatchSnapshot();
  });
});
