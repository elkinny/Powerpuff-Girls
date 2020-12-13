import React from 'react';
import { render } from '@testing-library/react';

import EpisodeDetails from './EpisodeDetails';

jest.mock('../InfoCard', () => () => 'InfoCard');
jest.mock('react-redux', () => ({
  useSelector: () => ({}),
}));
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ }),
}));

describe('EpisodeDetails', () => {
  test('renders EpisodeDetails component', () => {
    const { container } = render(<EpisodeDetails />);

    expect(container).toMatchSnapshot();
  });
});

describe('getProps', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('return formed data', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ viewedEpisode: 1 }),
    }));
    const context = { params: { episodeId: 1 } };

    const result = await EpisodeDetails.getProps(context);

    expect(result).toMatchSnapshot();
  });

  test('return formed data when data is empty', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(null),
    }));
    const context = { params: { episodeId: 1 } };

    const result = await EpisodeDetails.getProps(context);

    expect(result).toMatchSnapshot();
  });
});
