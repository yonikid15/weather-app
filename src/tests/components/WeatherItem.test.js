import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem from '../../components/WeatherItem';

test('should render WeatherItem correctly', () => {
  const active = true;
  const data = {
    id: 0,
    city: 'Ottawa',
    country: 'CA',
    temperature: 300,
    humidity: 50,
    condition: 'clear skies',
    next: 1,
    prev: undefined
  }
  const wrapper = shallow( <WeatherItem active={ active } { ...data } /> );
  expect( wrapper ).toMatchSnapshot();
});