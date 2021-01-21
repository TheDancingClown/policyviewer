import 'react-native';
import React from 'react';
import CustomerScreen from '../src/CustomerScreen';
import MockPolicy from '../assets/mockPolicy'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<CustomerScreen route={{params: MockPolicy}} />);
});

