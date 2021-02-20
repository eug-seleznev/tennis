import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'

import {loadUser} from './src/redux/actions/auth'
import { StyleSheet,  View } from 'react-native';

import { setAuthToken } from './src/components/utils/axios';
import Login from './src/components/login/login'
import Main from './src/screens/Main'

import Menu from './src/screens/menu'
import Game from './src/screens/Game';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Player from './src/screens/Player';


export default function App() {
const dispatch = useDispatch()
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tokenBoulean = useSelector(state=> state.auth.token)
const [isAuthenticated, setIsAuthenticated] = useState(false)

useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
        setIsAuthenticated(res)
        setAuthToken(res)
    }) 


    if(isAuthenticated){
      dispatch(loadUser());

    }


  },[tokenBoulean])
  
  
  return (
    
    <View style={styles.container}>
    {/* <View style={{position: 'absolute', left: 0, top: 0, height: 100, width: 100, backgroundColor: 'black', zIndex:999}}>
          <Text style={{color: 'white'}}>absolute</Text>
      </View> */}
    {!isAuthenticated?  
    <Login /> :
        <Tab.Navigator>
            <Tab.Screen name='Главная' >
              {props => <Main {...props} exit={()=>exit()}/>}
            </Tab.Screen>

            <Tab.Screen name='Статистика' component={Player} />
            <Tab.Screen name='Играть' component={Game} />
            <Tab.Screen name='Меню' component={Menu} />
        </Tab.Navigator>
  
    }
      

 

    </View>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
