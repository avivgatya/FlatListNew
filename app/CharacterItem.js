import react from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CharacterItem = (props) => {
//console.log(JSON.stringify(props.person.name));ex

    let gender = props.person.contact.gender;
    let image1= require('../app/male.png');
    let image2= require('../app/female.jpg');
    let genderImage;

    switch (gender) {
        case 'male':
            genderImage=image1;
            break;
        case 'female':
            genderImage = image2;
            break;
        default:
            break;
    }
    let birthday=props.person.contact.birthday;
    let age = calculateAge(birthday);


    
    return(
        <View style={myStyle.row_container}>
            <View style={myStyle.image_container_L}>
                <Image style={myStyle.image} source={{uri: props.person.image}} />
            </View>
            <View style={myStyle.detailes_container}>
                <Text style={myStyle.name}>{props.person.contact.firstname} {props.person.contact.lastname}</Text>
                <Text style={myStyle.text2}>{props.person.country}</Text>
                <Text style={myStyle.text2}>{'Age: '+age}</Text>               
            </View>
            <View style={myStyle.image_container_R}>
            <Image style={myStyle.imageSmall} source={genderImage} />
            </View>

        </View>
    )
}
const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
const myStyle = StyleSheet.create({
    row_container: {
        width:'100%', flexDirection:'row', marginBottom:12,
        
        borderTopLeftRadius:0, borderTopRightRadius:0,
        borderBottomLeftRadius:0, borderBottomRightRadius:0,
        backgroundColor:'#ffffff',borderWidth:0.7,height:100
      },
      image: {width:'100%', height:'100%'},
      imageSmall: {width:'50%', height:'50%'},
      image_container_L: {width:'30%',height:'100%'},
      image_container_R: {width:'15%',height:'100%',alignItems:'center',justifyContent:'center'},
      detailes_container : {width:'55%', padding:10},
      name: {fontSize:15, fontWeight:'700', color:'#404040'},
      text2: {fontSize:13, fontWeight:'300', color:'#808080'},
      occupation: {fontSize:10, fontStyle:'italic'}
});

export default CharacterItem;