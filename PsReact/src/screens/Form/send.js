import firebase from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');
let en = "false";
let data = {};
let aws= [], fb=[], imp=[];
let resp = {};

export default async function setDataDB(){
    
    await AsyncStorage.getItem("anonimo").then(value => {
        en = value
    })
    for(let i = 0; i <= 13; ++i){
        await AsyncStorage.getItem("imp" + i).then(value => {
        if(value != null){

            imp.push(value) 
        }})
        await AsyncStorage.getItem("sat"+ i).then(value => {
        if(value != null){
  
            aws.push(value)
        }})
        await AsyncStorage.getItem("fb"+ i).then(value => {
        if(value != null){

            fb.push(value)
        }})
        await AsyncStorage.getItem("user"+ i).then(value => {
          if(value != null){
            let n = "user"+ i;
            data["Usuario"+ i] = value
          }})
    }


    for(let i = 0; i <= 13; ++i){
        if(imp[i] == "\"baixa\""){
            imp[i] = 1
        }else if(imp[i] == "\"media\""){
            imp[i] = 2
        }else if(imp[i] == "\"alta\""){
            imp[i] = 3
        }
        if(aws[i] == "\"nao_se_aplica\""){
            aws[i] = 5
        }else if(aws[i] == "\"ruim\""){
            aws[i] = 4
        }else if(aws[i] == "\"regular\""){
            aws[i] = 3
        }else if(aws[i] == "\"bom\""){
            aws[i] = 2
        }else if(aws[i] == "\"otimo\""){
            aws[i] = 1
        }
        let resp = {        
            "feedback": fb[i],
            "id_aluno": 1,
            "id_turma": 1,
            "id_pergunta": i,
            "id_satisfacao": aws[i],
            "id_importancia": imp[i],
            "semestre": 1
        }
    }

    

  await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/v1/Formulario/',
    data: [resp],
    headers: {
        'Content-Type': 'application/json',
    }
    }).then((response) => {
        console.log('token', response);
    }).catch((response) => {
        console.error('error', response)
    });



    console.log(imp,aws,fb)
    // firebase.database().ref('avaliacoes/').push(data)
    console.log("123456");
};