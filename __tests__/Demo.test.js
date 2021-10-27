import { View } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Demo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<View />);
    expect(wrapper.find('View').exists()).toBe(true);
  });
});
