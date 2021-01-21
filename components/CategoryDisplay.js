import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryDisplay = (props) => {
  return (
    <View testID={props.testID} style={styles.container}>
      <Text style={styles.subheading}>{props.subHeading}</Text>
      <Text>{props.detail}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  subheading: {
    fontWeight: 'bold'
  }
});

export default CategoryDisplay;