import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { editProfile, getProfile } from '../redux/actions/player';
import { logOut } from '../redux/actions/auth'

import Profile from '../components/login/profile'

const Menu = ({navigation}) => {
const dispatch = useDispatch()

  const Stack = createStackNavigator()
  const profile = useSelector(state => state.player.profile)
  // console.log('ahahahah',profile)

  const editPress = () => {
    navigation.navigate('Edit')
    dispatch(getProfile())
  }

  return (
 
    <View style={styles.container}>
         <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Button title='Edit profile' onPress={editPress}/>
      <Button  title='log out' onPress={()=>dispatch(logOut())} />

       
    </View>
  );
}
export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C4C4C4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  exitButton: {
    
  }
  });

