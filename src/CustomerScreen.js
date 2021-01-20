import { render } from 'enzyme';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomerScreen = ({ route, navigation }) => {
  
  const { policy, vehicle } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text testID='policyRef'>Policy reference:</Text>
        <Text>{policy.policy_ref}</Text>
        <Text testID='coverType'>Cover type:</Text>
        <Text>{policy.cover}</Text>
        <Text testID='car'>Car:</Text>
        <Text>{vehicle.make} {vehicle.model} {vehicle.colour} -{vehicle.reg}</Text>
        <Text testID='address'>Address:</Text>
        <Text>{policy.address.line_1}, {policy.address.line_2}, {policy.address.postcode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  }
});

export default CustomerScreen;
