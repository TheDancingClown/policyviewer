import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryDisplay from '../components/CategoryDisplay'

const CustomerScreen = ({ route }) => {
  
  const { policy, vehicle } = route.params

  const capitalise = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <CategoryDisplay 
        subHeading='Policy reference:'
        detail={policy.policy_ref}
        testID='policyRef'
        />
        <CategoryDisplay 
        subHeading='Cover Type:'
        detail={policy.cover}
        testID='coverType'
        />
        <CategoryDisplay 
        subHeading='Car:'
        detail={`${capitalise(vehicle.make)} ${capitalise(vehicle.model)} ${capitalise(vehicle.colour)} -${vehicle.reg}`}
        testID='car'
        />
        <CategoryDisplay 
        subHeading='Address:'
        detail={`${policy.address.line_1}, ${policy.address.line_2}, ${policy.address.postcode}`}
        testID='address'
        />
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
    flex: 3
  },
  title: { 
    textTransform: 'capitalize'
  }
});

export default CustomerScreen;
