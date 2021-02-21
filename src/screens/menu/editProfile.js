import React, { useState, useEffect } from 'react';
import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'

import { editProfile } from '../../redux/actions/player';
import { useDispatch } from 'react-redux';

const Profile = () => {
const dispatch = useDispatch()



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




const onSubmit = e => {
  e.preventDefault();

  

  console.log(formData, 'formData')
  dispatch(editProfile(formData))
  }


  return (
    <View style={styles.container}>
      <Text> Заполните профиль</Text>
      
      <Input
        placeholder="Имя"
        onChangeText={(text) => setFormData({...formData, name: text})}
        leftIcon={<Icon name="account" size={24} color="black" />}
      />

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
    alignItems: 'center',
    justifyContent: 'center',
  },

});



export default Profile
