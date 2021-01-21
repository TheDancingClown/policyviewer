import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (username, password) => {
    const sessionData = await _getSessionData(username, password)
    const policy = await _getPolicyData(sessionData.access_token)
    await navigation.navigate('CustomerScreen', policy)
  };
   
  const _getSessionData = async (username, password) => {
    try {
      let response = await fetch('https://api.bybits.co.uk/auth/token', {
        method: 'POST',
        headers: {
          "environment": "mock",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "type": "USER_PASSWORD_AUTH"
        })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const _getPolicyData = async (token) => {
    try {
      let response = await fetch('https://api.bybits.co.uk/policys/details', {
        method: 'GET',
        headers: {
          "environment": "mock",
          "Authorisation": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.underline}/>
      <View style={styles.form}>
        <Text style={styles.text}>User Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder='username'
          autoCapitalize='none'
          onChangeText={(username) => setUsername(username)}
          testID='username'
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.textInput}
          placeholder='password'
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(password) => {
            return setPassword(password); 
          }}
          testID='password'
        />
        <TouchableOpacity
          style={styles.signInBtn}
          disabled={!(username && password)}
          onPress={() => signIn(username, password)}
          testID='signInBtn'
        >
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  underline: {
    borderWidth: 2,
    borderColor: 'lightblue',
  },
  form: {
    margin: 20
  },
  text: {
    fontSize: 20,
    margin: 5
  },
  textInput: {
    margin: 5,
    padding: 10,
    fontSize: 15,
    borderColor: 'gray',
    borderWidth: 1
  },
  signInBtn: {
    margin: 5,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 5,
    alignSelf: 'flex-end'
  }
});

export default SignInScreen;
