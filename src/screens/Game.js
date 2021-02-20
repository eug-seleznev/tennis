import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logOut} from '../redux/actions/auth';
import {StyleSheet, Text, View, Button} from 'react-native';
// import  storage  from '../../components/localStorage/storage';
// import Icon from 'react-native-vector-icons/FontAwesome'
import {Icon} from 'react-native-elements';
import {APP_IP} from '@env';

const Game = () => {
  const dispatch = useDispatch();
  console.log('hello')
  console.log(APP_IP);
  return (
    <View style={styles.container}>
        <Text onClick={() => console.log('hello')}>Game</Text> 
    </View>
  );
};
export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {},
});
