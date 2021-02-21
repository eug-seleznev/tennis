import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CheckBox, Divider } from 'react-native-elements'

import { editProfile,myInfo } from '../../redux/actions/player';

const Profile = () => {
const dispatch = useDispatch()

const profile = useSelector(state => state.player.profile)

const [nameEdit, setName] = useState(false)
const [lastNameEdit, setLastName] = useState(false)
const [cityEdit, setCity] = useState(false)

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
  dispatch(myInfo())
  }
const cancel = (pla) =>{

  pla=='name' && (setFormData({...formData, name: profile.name}), setName(false))
  pla=='lastname' && (setFormData({...formData, lastname: profile.lastname}), setLastName(false))
  pla=='city' && (setFormData({...formData, city: profile.city}), setCity(false))
}

  return (
    <View style={styles.container}>
      <Text style={styles.titles}> Заполните профиль</Text>
      
     
          {!nameEdit?
          <View style={styles.textContainer}>
              <Text style={styles.texts} >
                {profile.name}
              </Text> 
              <Icon name='pencil-outline' size={24} color='black' onPress={()=>setName(true)} style={styles.icons} />
          </View> :
          <View style={styles.inputContainer}>
              <Input
                placeholder="Имя"
                onChangeText={(text) => setFormData({...formData, name: text})}
                // leftIcon={<Icon name="account" size={24} color="black" />}
              />
              <Icon name='cancel' size={24} color='black' onPress={()=>cancel('name')} style={styles.icons} />
          </View> 
          }
     
      
          {!lastNameEdit?
          <View style={styles.textContainer}>
              <Text style={styles.texts} >
                {profile.lastname}
              </Text> 
              <Icon name='pencil-outline' size={24} color='black' onPress={()=>setLastName(true)} style={styles.icons} />
          </View> :
          <View style={styles.inputContainer}>
              <Input
                placeholder="Фамилия"
                onChangeText={(text) => setFormData({...formData, lastname: text})}
                // leftIcon={<Icon name="account" size={24} color="black" />}
              />
              <Icon name='cancel' size={24} color='black' onPress={()=>cancel('lastname')} style={styles.icons} />
          </View> 
          }


          {!cityEdit?
          <View style={styles.textContainer}>
              <Text style={styles.texts} >
                {profile.city}
              </Text> 
              <Icon name='pencil-outline' size={24} color='black' onPress={()=>setCity(true)} style={styles.icons} />
          </View> :
          <View style={styles.inputContainer}>
              <Input
                placeholder="Город"
                onChangeText={(text) => setFormData({...formData, city: text})}
                // leftIcon={<Icon name="account" size={24} color="black" />}
              />
              <Icon name='cancel' size={24} color='black' onPress={()=>cancel('city')} style={styles.icons} />
          </View> 
          }


      <Text style={styles.titles}>Выберите удобное для игры время</Text>
      <View style={styles.timeBox}>
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
      </View>
      
     

      <Button title="Подтвердить" onPress={onSubmit}/>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    
  },
  titles:{
    marginVertical: 15,
    fontSize: 18,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: .7,
    height: 49,
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight:14,
    justifyContent: 'center',
    // alignItems: 'center'
    height: 49,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // paddingVertical: 5,
  },
  texts: {
    fontSize: 24,
    marginVertical: 'auto',
  },

  icons: {
    alignSelf: 'center',
  },
  timeBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,

  },
 

});



export default Profile
