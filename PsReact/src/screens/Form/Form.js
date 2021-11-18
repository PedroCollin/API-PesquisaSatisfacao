import React, {Component, useState} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import Formulario from '../../components/formulario';
import styles from './styles';
import Icon from "react-native-vector-icons/Entypo";
import api from '../../services/api';
const axios = require('axios');
export default class Form extends Component{
    
    

    
    // async componentDidMount() {


    //     api.get('http://127.0.0.1:8000/api/v1/Pergunta');
    //     this.setState({ pergunta: response.data });
        
    // }
    
      
      
    
    render () {
        //const [quest, setQuest] = useState(null);
        const getApi = async () => {
            
            axios.get('http://127.0.0.1:8000/api/v1/Pergunta').then(response => {
                console.log(response.data);
            })
            //setQuest = this.state.pergunta[0];
        }
        getApi()
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
            
            <Formulario title="" />
            <TouchableOpacity style={styles.buttom} 
            onPress={() => this.props.navigation.navigate('Form2')}>
                <Icon name="chevron-small-right" style={styles.icon}></Icon>
             </TouchableOpacity>
            </View>
            
        
        </View>    
        );
    };
}