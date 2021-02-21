import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
// import  storage  from '../../components/localStorage/storage';
// import Icon from 'react-native-vector-icons/FontAwesome'
import {APP_IP} from '@env';
import MapView from 'react-native-maps';
import {WebView} from 'react-native-webview';


const Game = () => {
  const dispatch = useDispatch();
  console.log('hello')
  console.log(APP_IP);
  return (
    <WebView
      source={{
        uri: 'https://github.com/facebook/react-native',
      }}
      style={{marginTop: 20}}
    />
  );
};
export default Game;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});