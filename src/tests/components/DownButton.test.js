import React from 'react';
import { shallow } from 'enzyme';
import { DownButton } from '../../components/DownButton';
import locations from '../fixtures/locations';

test('should render DownButton Correctly', () => {
  const wrapper = shallow( <DownButton />);
  expect( wrapper ).toMatchSnapshot();
});

test('should call startActivateLocation on button click', () => {
  document.body.innerHTML = '<div id="activeItem"></div>';
  const onStartActivateLocationSpy = jest.fn();
  const wrapper = shallow( <DownButton locations={locations} startActivateLocation={ onStartActivateLocationSpy }/> );
  wrapper.find( 'button' ).simulate( 'click' );
  expect( onStartActivateLocationSpy ).toHaveBeenCalled();
});

test('should not call startActivateLocation, when next is empty', () => {
  const onStartActivateLocationSpy = jest.fn();
  const wrapper = shallow( <DownButton locations={[]} startActivateLocation={ onStartActivateLocationSpy }/> );
  wrapper.find( 'button' ).simulate( 'click' );
  expect( onStartActivateLocationSpy ).not.toHaveBeenCalled();
});