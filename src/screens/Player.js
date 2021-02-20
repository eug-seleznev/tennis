import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {myInfo, allPlayers} from '../redux/actions/player'

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
      
      {!playersList?'':
        playersList.map ((el,i)=>{
          return(
            <View key={i} style={styles.player} >
              <Text>{el.name}</Text>
              <Text>{el.rating}</Text>
            </View>
          )
        })
      }
    

    </View>
  );
}
export default Player

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C4C4C4',
      alignItems: 'center',
      justifyContent: 'center',
      height:250,
      overflow:'scroll'
    },
    player: {
      display:'flex',
      flexDirection:'row',
      backgroundColor: '#C4C4C4',
      alignItems: 'center',
      justifyContent: 'space-between',
      width:'80%',
      borderBottomColor:'black',
      borderTopWidth:1,
      
    },
  
  exitButton: {
    
  }
  });

