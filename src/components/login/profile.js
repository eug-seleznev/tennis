import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { StyleSheet,  View, Button , Text} from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { editProfile } from '../../redux/actions/player';

const Profile = () => {

const dispatch = useDispatch()
 
const [formData, setFormData ] = useState({
    
  name: '',
  lastname: '',
  city: '',
  hours: [{
    strart: 8,
    end: 12
  }],

});

const [hrs, setHours] = useState({
  start: '8',
  end: '22'
})


const onChange = (e) => {
  console.log(e.target)

}

const onSubmit = e => {
  e.preventDefault();
  formData.hours.push(hrs)
  

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

      <Input
        label="Часы игры"
        keyboardType={'numeric'}
        onChangeText={onChange}
        placeholder="Часы игры WIP"
        value={hrs.start}
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
