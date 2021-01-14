import React from 'react';
import { Text } from 'react-native';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallow(<Text>Hello, World!</Text>)
    expect(wrapper.text()).toEqual("Hello, World!")
  })
})
