import { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
   } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import bgImage from './assets/images/reveillebg.png'
import logo from './assets/images/pawLogo.png'


const { width: WIDTH } = Dimensions.get('window')

export default class Example extends Component {
  render() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer} blurRadius={4}>
      <View style={styles.logoContainer}>
        <Image 
          source={logo} 
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer1}>
        <Icon
          style={styles.inputIcon}
          name={'person-outline'} 
          size={28} 
          color ={'rgba(0, 0, 0, 0.7)'}
        />
        <TextInput 
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(119, 119, 119, 0.7)'}
            underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer2}>
        <Icon
          style={styles.inputIcon}
          name={'lock-closed-outline'} 
          size={28} 
          color ={'rgba(0, 0, 0, 0.7)'}
        />
        <TextInput 
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(119, 119, 119, 0.7)'}
            underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.btnEye}>
          <Icon
           name={'ios-eye-off-outline'} 
           size={26} 
           color={'rgba(255, 255, 255, 0.7'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <View style={styles.orBar}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <TouchableOpacity style={styles.btnCreateAcc}>
          <Text style={styles.text}>Create an Account</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute', top: 115, left: 0, right: 0, bottom: 0
  },
  logo: {
    width: 250,
    height: 250
  },
  inputContainer1: {
    marginTop: 350,
  },
  inputContainer2: {
    marginTop: 10,
  },
  input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize: 18,
      paddingLeft: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      color: 'rgba(119, 119, 119, 0.7)',
      marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontsize: 20,
    textAlign: 'center',
  },
  orBar: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 20
    //position: 'absolute', bottom: 50
    // need to mess with the values of the absolute pos to find the right pos
    // otherwise it will attach to the other elements when using keyboard animation
    // don't have time right now
  },
  btnCreateAcc: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    marginTop: 20
    //position: 'absolute', bottom: 25
    // need to mess with the values of the absolute pos to find the right pos
    // otherwise it will attach to the other elements when using keyboard animation
    // don't have time right now
  },
});
