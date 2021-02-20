import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
// import  storage  from '../../components/localStorage/storage';
// import Icon from 'react-native-vector-icons/FontAwesome'
import {APP_IP} from '@env';
import MapView from 'react-native-maps';


const Game = () => {
  const dispatch = useDispatch();
  console.log('hello')
  console.log(APP_IP);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
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