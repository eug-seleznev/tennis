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
  let myGames = [
    {
      result:'win',
      enemy:'defoltniy tennisman',
      date:'20.10.20',
      number:'1488',
      rank:122,
      city:'Simferopol'
    },
    {
      result:'win',
      enemy:'retard',
      date:'23.10.20',
      number:'1438',
      rank:557,
      city:'Junkoy'
    },
    {
      result:'win',
      enemy:'chmo',
      date:'27.10.20',
      number:'1418',
      rank:278,
      city:'Junkoy'
    },
    {
      result:'win',
      enemy:'pidr',
      date:'30.10.20',
      number:'1411',
      rank:222,
      city:'Junkoy'
    },
    {
      result:'lose',
      enemy:'grandmaster',
      date:'30.10.20',
      number:'1337',
      rank:15,
      city:'Belogorsk'
    },
    {
      result:'lose',
      enemy:'atp player',
      date:'30.10.20',
      number:'1334',
      rank:3,
      city:'Junkoy'
    },
    {
      result:'lose',
      enemy:'regular',
      date:'30.10.20',
      number:'1333',
      rank:30,
      city:'Simferopol'
    },
    {
      result:'win',
      enemy:'defoltniy tennisman',
      date:'30.10.20',
      number:'1311',
      rank:156,
      city:'Simferopol'
    }
  ]
  const [find, setFind] = useState('all')
  const [city, setCity] = useState(false)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(myInfo())
    dispatch(allPlayers(find))
  },[])
  useEffect(()=>{
    console.log(myInf,'myInfo')
  },[myInf])
  useEffect(()=>{
    dispatch(allPlayers(find,city))

  },[find])

  return (
    
    <View style={styles.container}> 
    <Text style={{fontSize: 24, alignSelf:'center'}}>Рейтинг</Text>
    <View style={styles.buttons_container}> 
      <Button style={{width:'50%'}} color={find=='all'?'red':'black'} onPress={()=> {setFind('all')}}>Общий</Button>
      <Button  style={{width:'50%'}} color={find=='city'?'red':'black'} onPress={()=> {setFind('city'),setCity(myInf.city)}}>Городской</Button>
    </View>
    
      <DataTable.Header style={styles.header}>
        
          <DataTable.Title >     Игрок</DataTable.Title>
          <DataTable.Title numeric>Рейтинг</DataTable.Title>
      </DataTable.Header>
      <ScrollView style={styles.table}>
      <DataTable >
      
      {!playersList?<Text>loading</Text>:
        playersList.map ((el,i)=>{
          return(
            <DataTable.Row key={i} style={styles.player}>
              <DataTable.Cell>{i+1}  {el.fullname}</DataTable.Cell>
              <DataTable.Cell numeric>{el.rating}</DataTable.Cell>
            </DataTable.Row>
          )
        })
      }
    </DataTable>
    </ScrollView>
    <View style={styles.table}>
      <View style={styles.top__info}>
        <Text style={{fontSize: 24}}>История игр</Text>
        <Text>
          <Text style={{color:'green'}}>{myInf.win}</Text>/
          <Text style={{color:'red'}}>{myInf.defeat}</Text>
          <Text style={{color:`${myInf.win/(myInf.defeat+myInf.win)*100>50?'green':'red'}`}}>  {Math.trunc(myInf.win/(myInf.defeat+myInf.win)*100)}%</Text>
        </Text>
      </View>
      <DataTable.Header style={styles.header}>
          <DataTable.Title >Номер        Дата</DataTable.Title>
          
          <DataTable.Title numeric>Соперник</DataTable.Title>
          <DataTable.Title numeric>Результат</DataTable.Title>
      </DataTable.Header>
      <ScrollView style={styles.table}>
      <DataTable >
      
      {!myGames?<Text>loading</Text>:
        myGames.map ((el,i)=>{
          return(
            <DataTable.Row key={i} style={styles.player} style={{display:`${find==='city'&&city!==el.city?'none':'flex'}`}}>
              <DataTable.Cell >#{el.number}   {el.date}</DataTable.Cell>
              <DataTable.Cell >#{el.rank} {el.enemy}</DataTable.Cell>
              <Text style={{marginTop:14, color:`${el.result==='win'?'green':'red'}`}}  numeric>{el.result}</Text>
            </DataTable.Row>
          )
        })
      }
    </DataTable>
    </ScrollView>
    </View>
    </View>
  );
}
export default Player

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    top__info: {
      width:'93%',
      marginLeft:15,
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
    },
    header: {
      display:'flex',
      justifyContent:'space-between'

    },
    table: {
      height:'40%',
      marginBottom:20
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

