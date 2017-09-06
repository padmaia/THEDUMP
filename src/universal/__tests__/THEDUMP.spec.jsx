import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import THEDUMP from '../THEDUMP';

describe('THEDUMP', () => {
  it('should render THE DUMP', () => {
    const renderer = ReactTestRenderer.create(<THEDUMP />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
