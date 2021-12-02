import React, {Component, useState} from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { RectButtonProps } from 'react-native-gesture-handler';
import Formulario from '../../components/formulario';
import styles from './styles';
import style from '../../components/formulario/styles'
import Icon from "react-native-vector-icons/Entypo";
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios');

type Props = RectButtonProps & {
    title: string;
}



export default function Form3 ({navigation}){
    
    

    
    // async componentDidMount() {


    //     api.get('http://127.0.0.1:8000/api/v1/Pergunta');
    //     this.setState({ pergunta: response.data });
        
    // }
    const [pergunta, setPergunta] = useState('');
    React.useEffect(() => {
        getPergunta();
        getData();
    }, [])
    const getPergunta = async () => {
        const response = await api.get('http://127.0.0.1:8000/api/v1/Pergunta/10/');
    ;
  
        setPergunta(response.data)
    }
      
    
    const [importance, setImportance] = React.useState('');
    const [satisfaction, setSatisfaction] = React.useState('');
    const [feedback, setFeedback] = React.useState("");
    const getData = () =>{
        try {
  
            AsyncStorage.getItem('imp10')
            .then(value => {
               
                if(value != null){
                    setImportance(value.replace(/['"]+/g, ''));    
                }

            })
            AsyncStorage.getItem('sat10')
            .then(value => {
                if(value != null){
                    setSatisfaction(value.replace(/['"]+/g, ''));    
                }
                
            })
        } catch (error) {
            console.log(error);
        }
    }

    const data = async (imp, sat, fb) => {
        try {
          await AsyncStorage.setItem("imp10", JSON.stringify(imp));
          await AsyncStorage.setItem("sat10", JSON.stringify(sat));
          await AsyncStorage.setItem("fb10", JSON.stringify(fb));
        } catch (error) {
          console.log(error);
        }
      };

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
            <View>
            <Text style={style.titleP}>{pergunta.id + '. '+ pergunta.pergunta}</Text>
            <RadioButton.Group onValueChange={newValue => setImportance(newValue)} value={importance}>
                <Text style={style.title}>Nivel de Importância</Text>
                <View style={{ justifyContent: 'space-around' }}>
                    <RadioButton.Item label="Alta" value="alta" />
                    <RadioButton.Item label="Media" value="media" />
                    <RadioButton.Item label="Baixa" value="baixa" />
                </View>
            </RadioButton.Group>
            <RadioButton.Group onValueChange={newValue => setSatisfaction(newValue)} value={satisfaction}>
                <Text style={style.title}>Nivel de Satisfação</Text>
                <View style={{ justifyContent: 'center' }}>
                    <RadioButton.Item label="Ótimo" value="otimo" />
                    <RadioButton.Item label="Bom" value="bom" />
                    <RadioButton.Item label="Regular" value="regular" />
                    <RadioButton.Item label="Ruim" value="ruim" />
                    <RadioButton.Item label="Não se Aplica" value="nao_se_aplica" />
                </View>
            </RadioButton.Group>
            {satisfaction === 'regular' || satisfaction === 'ruim'
                ?
                <View>
                    <Text style={style.text}>
                        Seu feedback é importante para melhorar a qualidade do serviço prestado.
                    </Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite aqui"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(newValue) => setFeedback(newValue)}
                    />
                </View>
                :
                null
            }
        </View>
        <View style={styles.container1}>
        <TouchableOpacity 
            style={styles.buttom1} 
            onPress={() => navigation.navigate("Form9")}
        >
            <Icon name="chevron-small-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        {satisfaction === "" ||
        importance === "" ||
        ((satisfaction === "regular" || satisfaction ==="ruim") &&
        feedback ==="") ? ( 
            <TouchableOpacity style={styles.buttom}>
                <Icon name="chevron-small-right" style={styles.icon}></Icon>
             </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.buttom} 
            onPress={() => (
                data(importance, satisfaction, feedback),navigation.navigate('Form11'))}>
                <Icon name="chevron-small-right" style={styles.icon}></Icon>
             </TouchableOpacity>
        )}
            </View>  
        </View>
        </View>
 
        );
};