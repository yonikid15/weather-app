import React from 'react';
import { shallow } from 'enzyme';
import Humidity from '../../components/Humidity';

test('should render Humidity correctly', () => {
  const wrapper = shallow( <Humidity hmidity={80} /> );
  expect( wrapper ).toMatchSnapshot();
});