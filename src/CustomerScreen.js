import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomerScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text testID='header'>My Policy</Text>
        <Text testID='policyRef'>Policy reference:</Text>
        <Text testID='coverType'>Cover type:</Text>
        <Text testID='car'>Car:</Text>
        <Text testID='address'>Address:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  }
});

export default CustomerScreen;