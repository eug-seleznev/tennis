import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'

import { editProfile } from '../../redux/actions/player';

const Profile = () => {
const dispatch = useDispatch()

const profile = useSelector(state => state.player.profile)

const [nameEdit, setName] = useState(false)
const [lastNameEdit, setLastName] = useState(false)
const [cityEdit, setSity] = useState(false)

const [formData, setFormData ] = useState({
  name: '',
  lastname: '',
  city: '',
  hours: {
    morning: false,
    day: false,
    evening: false,
  },

});

useEffect(()=>{

  profile && setFormData({
    name: profile.name,
    lastname: profile.lastname,
    city: profile.city,
    hours: {
      morning: profile.activeTime.morning,
      day: profile.activeTime.day,
      evening: profile.activeTime.evening,
    }
  })
},[profile])


const onSubmit = e => {
  e.preventDefault();

  

  console.log(formData, 'formData')
  dispatch(editProfile(formData))
  }


  return (
    <View style={styles.container}>
      <Text > Заполните профиль</Text>
      
     
          {!nameEdit?
          <View style={styles.textContainer}>
              <Text style={styles.texts} >
                {profile.name}
              </Text> 
              <Icon name='pencil-outline' size={24} color='black' onPress={()=>setName(true)} style={styles.icons} />
          </View> :
          <View style={styles.inputContainer}>
              <Input
                style={styles.inputs}
                placeholder="Имя"
                onChangeText={(text) => setFormData({...formData, name: text})}
                leftIcon={<Icon name="account" size={24} color="black" />}
              />
              <Icon name='cancel' size={24} color='black' onPress={()=>setName(false)} style={styles.icons} />
          </View> 
          }
     
      
      
      

      <Input
        placeholder="Фамилия"
        onChangeText={(text) => setFormData({...formData, lastname: text})}
      />

      <Input
        placeholder="Город"
        onChangeText={(text) => setFormData({...formData, city: text})}
      />
      <CheckBox
        title='Morning'
        checked={formData.hours.morning}
        onPress={()=>setFormData({...formData, hours: {...formData.hours, morning: !formData.hours.morning}})}
      />
      <CheckBox
        title='Day'
        checked={formData.hours.day}
        onPress={()=>setFormData({...formData, hours: {...formData.hours, day: !formData.hours.day}})}
      />
      <CheckBox
        title='Evening'
        checked={formData.hours.evening}
        onPress={()=>setFormData({...formData, hours: {...formData.hours, evening: !formData.hours.evening}})}
      />
     

      <Button title="Подтвердить" onPress={onSubmit} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderBottomWidth: .7,
    // paddingVertical: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingLeft: 0,
    paddingRight:40,
    height: 49,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // paddingVertical: 5,
  },
  texts: {
    fontSize: 24,
    marginVertical: 5,
  },
  inputs: {
    

  },
  icons: {
    marginVertical: 5,
  }

});



export default Profile
