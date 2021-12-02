import firebase from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
let en = "false";
let data = {};
export default async function setDataDB(){
    
    await AsyncStorage.getItem("anonimo").then(value => {
        en = value
    })
    for(let i = 0; i <= 13; ++i){
        await AsyncStorage.getItem("imp" + i).then(value => {
        if(value != null){
            let n = "imp"+ i;
            data["opt" + i] = value
        }})
        await AsyncStorage.getItem("sat"+ i).then(value => {
        if(value != null){
            let n = "sat"+ i;
            data["aws"+ i] = value
        }})
        await AsyncStorage.getItem("fb"+ i).then(value => {
        if(value != null){
            let n = "fb"+ i;
            data["comment"+ i] = value
        }})
        await AsyncStorage.getItem("user"+ i).then(value => {
          if(value != null){
              let n = "user"+ i;
              data["Usuario"+ i] = value
          }})
    }
    console.log(data)
    firebase.database().ref('avaliacoes/').push(data)
    console.log("123456");
};