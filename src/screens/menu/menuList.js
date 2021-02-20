import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import Profile from '../components/login/profile'

const MenuList = ({navigation}) => {

  const Stack = createStackNavigator()

  return (
 
    <View style={styles.container}>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Text>Меню тут</Text>
        <Button title='Edit profile' onPress={()=>navigation.navigate('Edit')}/>
    </View>
  );
}
export default MenuList

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

