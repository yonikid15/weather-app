import React from 'react';
import { shallow } from 'enzyme';
import Place from '../../components/Place';

test('should render Place correctly', () => {
  const wrapper = shallow( <Place city={'Ottawa'} country={'CA'} /> );
  expect( wrapper ).toMatchSnapshot();
});