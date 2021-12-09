import React, { Component, useState } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { RectButtonProps } from "react-native-gesture-handler";
import Formulario from "../../components/formulario";
import styles from "./styles";
import style from "../../components/formulario/styles";
import Icon from "react-native-vector-icons/Entypo";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import setDataDB from "../Form/send";
const axios = require("axios");

type Props = RectButtonProps & {
  title: string,
};

export default function Form3({ navigation }) {
  // async componentDidMount() {

  //     api.get('http://127.0.0.1:8000/api/v1/Pergunta');
  //     this.setState({ pergunta: response.data });

  // }
  const [pergunta, setPergunta] = useState("");
  React.useEffect(() => {
    getPergunta();
  }, []);
  const getPergunta = async () => {
    const response = await api.get("http://127.0.0.1:8000/api/v1/Pergunta/13/");
    setPergunta(response.data);
  };



  // verificando se o usuario deseja enviar o form anonimamente:
  const [anonimo, setAnonimo] = React.useState("");
  let user = "";
  const data = async (anon) => {
    try {
      await AsyncStorage.setItem("anonimo", JSON.stringify(anon));
      
      user = JSON.parse(await AsyncStorage.getItem("anonimo"));

      // Caso ele deseje enviar anonimamente, o usuário para o banco será "anonimo":
      if (user == "Sim") {
        user = "Anônimo";
      // Caso ele não deseje enviar anonimamente, o usuário para o banco será o email dele:
      } else {
        user = JSON.parse(await AsyncStorage.getItem("user"));;
      }
      await AsyncStorage.setItem("anonimo", JSON.stringify(user));
      console.log(JSON.parse(await AsyncStorage.getItem("anonimo")));

    } catch (error) {
      console.log(error);
    }
  };

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


        <RadioButton.Group
          onValueChange={(newValue) => setAnonimo(newValue)}
          value={anonimo}
        >
          <Text style={style.title}>Deseja enviar seu formulário anonimamente?</Text>
          <View style={styles.cont1}>
            <RadioButton.Item label="Sim" value="Sim" />
            <RadioButton.Item label="Não" value="Não" />
          </View>
        </RadioButton.Group>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.buttom1}
            onPress={() => navigation.navigate("")}
          >
            <Icon name="chevron-small-left" style={styles.icon}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttom1}
            onPress={() => (navigation.navigate("Home"), data(anonimo), setDataDB(pergunta, user))}
          >
            <Icon name="chevron-small-right" style={styles.icon}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
