import React from 'react';
import { shallow } from 'enzyme';
import Temperature from '../../components/Temperature';

test('should render Temperature correctly', () => {
  const wrapper = shallow( <Temperature temperature={300} /> );
  expect( wrapper ).toMatchSnapshot();
});