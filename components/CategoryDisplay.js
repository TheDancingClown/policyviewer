import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryDisplay = (props) => {
  return (
    <View testID={props.testID} style={styles.container}>
      <Text style={styles.subheading}>{props.subHeading}</Text>
      <Text style={styles.text}>{props.detail}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 20
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 15
  }
});

export default CategoryDisplay;