import React, {Component, useState} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import Formulario from '../../components/formulario';
import styles from './styles';
import Icon from "react-native-vector-icons/Entypo";
import api from '../../services/api';
const axios = require('axios');
export default function form ({navigation}){
    
    

    
    // async componentDidMount() {


    //     api.get('http://127.0.0.1:8000/api/v1/Pergunta');
    //     this.setState({ pergunta: response.data });
        
    // }
    const [pergunta, setPergunta] = useState('');
    React.useEffect(() => {
        getPergunta()
    }, [])
    const getPergunta = async () => {
        const response = await api.get('http://127.0.0.1:8000/api/v1/Pergunta/1/');
    ;
  
        setPergunta(response.data)
    }
      
    
    
    return( 
        
        <View>
            <View style={styles.container}>
            <View style={styles.rectStack}>
            <View style={styles.rect}></View>
                 <Image
                     source={require("../../../assets/images/senailogo.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </View>
            
            <Formulario title={pergunta.id + '. '+ pergunta.pergunta} />
            <TouchableOpacity style={styles.buttom} 
            onPress={() => navigation.navigate('Form2')}>
                <Icon name="chevron-small-right" style={styles.icon}></Icon>
             </TouchableOpacity>
            </View>
            
        
        </View>    
        );
};