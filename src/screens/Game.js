import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View,Image} from 'react-native';
// import  storage  from '../../components/localStorage/storage';
// import Icon from 'react-native-vector-icons/FontAwesome'
import {APP_IP} from '@env';
import MapView from 'react-native-maps';
import {WebView} from 'react-native-webview';
import { myInfo } from '../redux/actions/player';
import { Button } from 'react-native-paper';


const Game = () => {
  const dispatch = useDispatch();
  const myInf = useSelector(state=> state.player.myInfo)
  useEffect(()=>{
    dispatch(myInfo())
  },[])
  console.log('hello')
  console.log(APP_IP);
  return (
    <View>
      <View style={{height:'50%',overflowY:'hidden'}}>
        <WebView
          source={{
            uri: 'https://github.com/facebook/react-native',
          }}
          style={{marginTop: 20}}
        />
      </View>
      <View  style={{height:'50%',backgroundColor:'white',zIndex:1}}>
          <View style={styles.my_data}>
            <Image style={styles.avatar} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Roger_Federer_2012_Indian_Wells.jpg'}}></Image>
            <View style={styles.text_data}>
              <Text style={styles.name}>{myInf.fullname}</Text>
              <Text style={styles.rating}>Мой рейтинг: {myInf.rating}</Text>
              <Text style={styles.place}>2555 в мире</Text>
              <Text style={styles.place}>55 в городе {myInf.city}</Text>
            </View>
          </View>
          <Button mode="contained" style={styles.button}>Найти соперника</Button>
      </View>
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
  avatar: {
    height:100,
    width:100,
    zIndex:1,
    borderRadius:100,
    marginStart:10,
  },
  button: {
    width:'75%',
    alignSelf: 'center',
    marginTop:75
  },
  my_data: {
    display:'flex',
    flexDirection:'row',
    
  },
  text_data: {
    marginStart:20
    
  },
  name: {
    fontSize: 30
  },
  rating: {
    fontSize: 18
  },
  place: {
    fontSize: 12
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});