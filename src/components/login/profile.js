import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'

import { editProfile, getProfile } from '../../redux/actions/player';

const Profile = () => {

const dispatch = useDispatch()
const profile = useSelector(state => state.player.profile)


const [formData, setFormData ] = useState({
  name: profile? profile.name : '',
  lastname: profile? profile.lastname :'',
  city:profile? profile.city : '',
  hours: {
    morning:  false,
    day:  false,
    evening:  false,
    // profile? profile.hours.evening :
  },

});

const [hrs, setHours] = useState({
  start: '8',
  end: '22'
})

useEffect(()=>{
    console.log(formData.hours)
},[formData])
useEffect(()=>{
    console.log(profile)
},[profile])

const onChange = (e) => {
  console.log(e.target)

}

const onSubmit = e => {
  e.preventDefault();
  formData.hours.push(hrs)
  

  console.log(formData, 'formData')
  dispatch(editProfile(formData))
  }

  const getData = e => {
    e.preventDefault();

    dispatch(getProfile())
    }

  return (
    <View style={styles.container}>
      <Text> Заполните профиль</Text>
      <Button title='получить данные' onPress={getData}/>
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
