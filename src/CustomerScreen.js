import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomerScreen = ({ route, navigation }) => {
  
  const { access_token } = route.params

  const [policyRef, setPolicyRef] = useState("");
  const [coverType, setCoverType] = useState("");
  const [car, setCar] = useState("");
  const [address, setAddress] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        
        <Text>itemId: {access_token} </Text>
        <Text testID='policyRef'>Policy reference:</Text>
        <Text>{policyRef}</Text>
        <Text testID='coverType'>Cover type:</Text>
        <Text>{coverType}</Text>
        <Text testID='car'>Car:</Text>
        <Text>{car}</Text>
        <Text testID='address'>Address:</Text>
        <Text>{address}</Text>
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
