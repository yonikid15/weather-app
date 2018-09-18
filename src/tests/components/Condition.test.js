import React from 'react';
import { shallow } from 'enzyme';
import Condition from '../../components/Condition';

test('should render Condition correctly', () => {
  const wrapper = shallow( <Condition condition={'cloudy'} /> );
  expect( wrapper ).toMatchSnapshot();
});