import React, {Component, useState} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { RectButtonProps } from 'react-native-gesture-handler';
import Formulario from '../../components/formulario';
import styles from './styles';
import Icon from "react-native-vector-icons/Entypo";
import api from '../../services/api';
const axios = require('axios');

function Form ({navigation}) {

    const [pergunta, setPergunta] = useState('');
    React.useEffect(() => {
        getPergunta()
    }, [])
    const getPergunta = async () => {
        const response = await api.get('http://127.0.0.1:8000/api/v1/Pergunta/6/');
    ;
  
        setPergunta(response.data)
    }

    return (
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

                <View style={styles.container1}>
                    <TouchableOpacity style={styles.buttom1} 
                    onPress={() => navigation.navigate('Form5')}>
                        <Icon name="chevron-small-left" style={styles.icon}></Icon>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttom2} 
                    onPress={() => navigation.navigate('Form7')}>
                        <Icon name="chevron-small-right" style={styles.icon}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
   
    );
}

export default Form;