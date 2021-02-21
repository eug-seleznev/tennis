import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {myInfo, allPlayers} from '../redux/actions/player'
import {Button, DataTable, ToggleButton} from 'react-native-paper'
import { ScrollView } from 'react-native';
const Player = () => {
  const playersList = useSelector(state=> state.player.allPlayers)
  const myInf = useSelector(state=> state.player.myInfo)
  const [find, setFind] = useState('all')
  const [city, setCity] = useState(false)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(myInfo())
    
  },[])
  useEffect(()=>{
    console.log(myInf,'myInfo')
  },[myInf])
  useEffect(()=>{
    dispatch(allPlayers(find,city))

  },[find])

  return (
    
    <View style={styles.container}> 
    <View style={styles.buttons_container}> 
      <Button style={{width:'50%'}} color={find=='all'?'red':'black'} onPress={()=> {setFind('all')}}>Общий</Button>
      <Button  style={{width:'50%'}} color={find=='city'?'red':'black'} onPress={()=> {setFind('city'),setCity(myInf.city)}}>Городской</Button>
    </View>
    
      <DataTable.Header style={styles.header}>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title numeric>Рейтинг</DataTable.Title>
      </DataTable.Header>
      <ScrollView style={styles.table}>
      <DataTable >
      
      {!playersList?<Text>none</Text>:
        playersList.map ((el,i)=>{
          return(
            <DataTable.Row key={i} style={styles.player}>
              <DataTable.Cell>{el.name}</DataTable.Cell>
              <DataTable.Cell numeric>{el.rating}</DataTable.Cell>
            </DataTable.Row>
          )
        })
      }
    </DataTable>
    </ScrollView>
    </View>
  );
}
export default Player

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
     
      
    },
    header: {
      display:'flex',
      justifyContent: 'space-between',

    },
    table: {
      height:'40%',
     
    },
    
    buttons_container: {
      display:'flex',
      flexDirection:'row'
      
    },
    player: {
      display:'flex',
      flexDirection:'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
      width:'100%',

      
    },
  
  exitButton: {
    
  }
  });

