import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomerScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text testID='welcome'>Welcome</Text>
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
