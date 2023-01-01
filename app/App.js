import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, Image,
   ActivityIndicator, StyleSheet, Alert, FlatList } from 'react-native';
import CharacterItem from "./CharacterItem";

const App = () => {

  // [searchName, setSearchName] = useState('characters');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const doSomething = async() => {
    setIsLoading(true);
    const api = `https://fakerapi.it/api/v1/companies?_seed=12456`;
    const response = await fetch(api, {
      method: 'get'
    });
    const data = await response.json();
    //console.log(data.data[0]);
    setResults(data.data);
    setIsLoading(false);
   // console.log('##########################################################Start of program!');
    //console.log(results);
  }

  return(
    <View style={myStyle.container}>
      <View style={{width:'100%', flexDirection:'row', height:'10%'}}>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
        {
        isLoading 
        ? (<ActivityIndicator size='large' color='#A10702' />) 
        : (
          <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
            <Text style={myStyle.btntext}>Show Data</Text>
          </TouchableOpacity>
        )
      }
        </View>
      </View>

      <View style={{width:'100%', height:'90%'}}>
      {
        results ? (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={itemRow => <CharacterItem person = {itemRow.item} />}
        />
        ) : (
          <Text>No results</Text>
        )
      }
      </View>
    </View>
  )
}

const myStyle = StyleSheet.create({
  
  btn:{width:'40%', height:'55%',paddingVertical:10,
  alignItems:'center', backgroundColor:'#A10702',
  borderRadius:6
  },
  btntext: {color:'#DEE5E5', fontSize:16, fontWeight:'700'},
  container: {flex:1, padding:30,
    backgroundColor:'#DEE5E5'}
});

export default App;