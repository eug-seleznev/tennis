import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox } from 'react-native-elements'

import { editProfile, getProfile } from '../../redux/actions/player';

const Profile = () => {

const dispatch = useDispatch()
const profile = useSelector(state => state.player.profile)

const refName = useRef()
const refLastname = useRef()
const refCity = useRef()
const refMorning = useRef()
const refDay = useRef()
const refEvening = useRef()

const [formData, setFormData ] = useState({
  name:  '',
  lastname: '',
  city: '',
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
    console.log(profile)
    refName.current.setNativeProps({value: profile.name})
    refLastname.current.setNativeProps({value: profile.lastname})
    refCity.current.setNativeProps({value: profile.city})
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
        ref={refName}
        placeholder="Имя"
        onChangeText={(text) => setFormData({...formData, name: text})}
        leftIcon={<Icon name="account" size={24} color="black" />}
      />

      <Input
        ref={refLastname}
        placeholder="Фамилия"
        onChangeText={(text) => setFormData({...formData, lastname: text})}
      />

      <Input
        ref={refCity}
        placeholder="Город"
        onChangeText={(text) => setFormData({...formData, city: text})}
      />
      <CheckBox
        ref={refMorning}
        title='Morning'
        checked={formData.hours.morning}
        onPress={()=>setFormData({...formData, hours: {...formData.hours, morning: !formData.hours.morning}})}
      />
      <CheckBox
        ref={refDay}
        title='Day'
        checked={formData.hours.day}
        onPress={()=>setFormData({...formData, hours: {...formData.hours, day: !formData.hours.day}})}
      />
      <CheckBox
        ref={refEvening}
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
