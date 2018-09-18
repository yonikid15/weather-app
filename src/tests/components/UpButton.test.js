import React from 'react';
import { shallow } from 'enzyme';
import { UpButton } from '../../components/UpButton';
import locations from '../fixtures/locations';

test('should render UpButton Correctly', () => {
  const wrapper = shallow( <UpButton />);
  expect( wrapper ).toMatchSnapshot();
});

test('should call startActivateLocation on button click', () => {
  document.body.innerHTML = '<div id="activeItem"></div>';
  const onStartActivateLocationSpy = jest.fn();
  const wrapper = shallow( <UpButton locations={[ locations[1], locations[0], locations[2] ]} startActivateLocation={ onStartActivateLocationSpy }/> );
  wrapper.find( 'button' ).simulate( 'click' );
  expect( onStartActivateLocationSpy ).toHaveBeenCalled();
});

test('should not call startActivateLocation, when prev is empty', () => {
  const onStartActivateLocationSpy = jest.fn();
  const wrapper = shallow( <UpButton locations={[]} startActivateLocation={ onStartActivateLocationSpy }/> );
  wrapper.find( 'button' ).simulate( 'click' );
  expect( onStartActivateLocationSpy ).not.toHaveBeenCalled();
});