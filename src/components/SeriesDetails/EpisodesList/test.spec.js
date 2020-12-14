import React from 'react';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import EpisodesList from './EpisodesList';

jest.mock('./Episode', () => (props) => `Episode: ${JSON.stringify(props)}`);

describe('EpisodesList', () => {
  beforeAll(() => {
    jest.spyOn(reactRedux, 'useSelector').mockImplementation();
  });

  test('renders EpisodesList component', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockReturnValue([
        { seson: 1, number: 1, image: { original: '/img.png' } },
        { seson: 1, number: 2, image: { original: '/img.png' } },
      ]);
    const { container } = render(<EpisodesList />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders EpisodesList component without passed image url', () => {
    jest
      .spyOn(reactRedux, 'useSelector')
      .mockReturnValue([{ seson: 1, number: 1 }, { seson: 1, number: 2 }]);
    const { container } = render(<EpisodesList />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
