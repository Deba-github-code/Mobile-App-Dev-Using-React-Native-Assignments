import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const backgroundImage = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/edb3623c00812d81d55c35ca75d776f2';


const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to the App!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
   // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    //backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    margin: 20,
    width: '90%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'lightblue', 
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
   // backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'lightblue',
    fontWeight: 'bold',
  },
});

export default GettingStarted;