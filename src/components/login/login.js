import React, { useState, useEffect } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/actions/auth'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
// import  storage  from '../../components/localStorage/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation}) => {

const dispatch = useDispatch()

// const tokBoulean = useSelector(state=> state.auth.token)
// const swit = token? true : false
 
const [formData, setFormData ] = useState({
        
  login: '',
  password: ''


});






const log = () => {
  console.log('bbb')

 
  console.log( AsyncStorage.getItem('token'), 'NEW TOKEN ')
//  console.log(tok, 'getItem token')
// token.then(res => setToken(res))
// console.log(tokken, 'tokkkkkken')
}

const onSubmit = async e => {
  e.preventDefault();
  // console.log(formData)
  dispatch(login(formData))
  

      // register({ name, email, password});

     
  }

 

  return (
    
    <View style={styles.container}>
 

      <TextInput
        onChangeText={text=>setFormData({...formData, login: text})}
        value={formData.email}
        placeholder='login'
      />
      <TextInput
        onChangeText={text=>setFormData({...formData, password: text})}
        value={formData.password}
        placeholder='password'
      />
      <Button title='Подтвердить' onPress={onSubmit} />
      <Button title='Регистрация' onPress={() => navigation.navigate('registration')} />
      <Button title='log' onPress={log} />
     
  

    </View>
  );
}
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
