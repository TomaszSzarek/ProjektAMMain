import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

const Log3 = () => {
  const navigation = useNavigation();
  const [camera, setCamera] = useState(CameraType.back);


  const takePicture = async () => {
    if (!camera) {
      return;
    }

    const photo = await camera.takePictureAsync({ quality: 0.5 });
    
     const filePath = `${FileSystem.documentDirectory}`; 
     const targetFileName = 'mojeZdjecie.jpg'; 
     const targetPath = `${filePath}/${targetFileName}`;
     navigation.navigate('TabNav');

 };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/NeoBank.png')}
          style={styles.headerText}
        />
      </View>
       <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        type={Camera.Constants.Type.front}
        ratio="16:9"
      /> 
       <TouchableOpacity onPress={takePicture} style={styles.div2}>
        <Text style={styles.text2}>Skanuj twarz</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38BF2D',
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    top: '10%',
  },
  headerText: {
    width: '100%',
    height: '50%',
  },
  imageContainer: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  div: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  div2: {
    position: 'absolute',
    left: '5%',
    top: '45%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 30,
    color: 'white',
  },
  div3: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    fontSize: 20,
  },
  camera: {
    flex: 1,
  },
});

export default Log3;
