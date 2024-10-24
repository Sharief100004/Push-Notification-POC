import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'prathyusha') {
      try {
        setError('');
        // navigation.replace('OTPScreen');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View>
    <Text>Login</Text>
      {/* <TextInput
        placeholder="Enter Email"
        style={globalStyles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {error ? <Text style={globalStyles.error}>{error}</Text> : null}
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Send OTP</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default LoginScreen;
