import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {myInfo, allPlayers} from '../redux/actions/player'
import {DataTable} from 'react-native-paper'
import { ScrollView } from 'react-native';
const Player = () => {
  const playersList = useSelector(state=> state.player.allPlayers)
  const [find, setFind] = useState('all')
  const [city, setCity] = useState(false)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(myInfo())
    dispatch(allPlayers(find,city))
  },[])
  // useEffect(()=>{
  //   console.log(playersList,'player list')
  // },[playersList])


  return (
    
    <View style={styles.container}>
      
      <DataTable.Header style={styles.header}>
          <DataTable.Title>Игрок</DataTable.Title>
          <DataTable.Title numeric>Рейтинг</DataTable.Title>
      </DataTable.Header>
      <ScrollView style={styles.table}>
      <DataTable >
      
      {!playersList?'':
        playersList.map ((el,i)=>{
          return(
            <DataTable.Row key={i} style={styles.player} >
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

