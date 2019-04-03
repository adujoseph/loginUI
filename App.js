/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from './Images/bg2.png';
import logo from './Images/discord.png';
import Icon from 'react-native-vector-icons/Ionicons';



const{width:WIDTH}=Dimensions.get('window');

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showPassword: true,
      pressed: false
    }
  }

  showPass = () => {
    if(this.state.pressed == false ){
      this.setState({
        showPassword : false,
        pressed: true
      })  
    }else {
      this.setState({
        showPassword : true,
        pressed: false
      }) 
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.logoText}> ChatFace</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} 
          style={styles.inputIcon}
          />
          <TextInput 
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            underlineColorAndroid={'transparent'}
          /> 
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} 
          style={styles.inputIcon}
          />
          <TextInput 
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPassword}
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            underlineColorAndroid={'transparent'}
          /> 
          <TouchableOpacity style={styles.btnEye} 
           onPress={this.showPass.bind(this)}>
            <Icon name={
              this.state.pressed == false 
              ? 'ios-eye' : 'ios-eye-off'} 
              size={28} 
              color={'rgba(255,255,255,0.7)'} 
               />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Login</Text>
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
    alignItems: 'center'
  }, 
  logoContainer : {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    fontWeight: '700',
    color: '#2C3E50',
    fontSize: 25,
    marginTop: 10,
  },
  inputContainer:{
    marginTop: 10
  },
  inputIcon:{
    position: 'absolute',
    top: 8,
    left: 37
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35 )',
    color: 'rgba(255,255,255, 0.7)',
    marginHorizontal: 25
  
  },
  btnEye:{
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#CB4335',
    marginTop: 20
    
  },
  text: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 20,
    textAlign: 'center',
    margin: 0
  

  }

});
