import React from 'react';
import { render } from '@testing-library/react';

import Episode from './Episode';

describe('Episode', () => {
  test('renders Episode component', () => {
    const { container } = render(<Episode
      id={367}
      name="Episode Name"
      season={1}
      number={4}
      image="/placeholder.png"
    />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
