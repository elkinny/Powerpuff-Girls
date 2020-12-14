import React from 'react';
import { render } from '@testing-library/react';

import InfoCard from './InfoCard';

jest.mock('./style.module.scss', () => ({
  row: 'row',
}));

describe('InfoCard', () => {
  test('renders InfoCard component with full data', () => {
    const { container } = render(<InfoCard
      image="/placeholder.png"
      name="name"
      picDetails={['picDetail1', 'picDetail2']}
      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      details={['detail1', 'detail2']}
      subTitle="subTitle"
      link={{ url: '/', text: 'link' }}
    />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders InfoCard component with no picDetails, details and link, but with isColumn', () => {
    const { container } = render(<InfoCard
      image="/placeholder.png"
      name="name"
      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      subTitle="subTitle"
      isColumn
    />);

    expect(container).toMatchSnapshot();
  });
});
