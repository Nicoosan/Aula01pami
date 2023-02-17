import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <View style = {estilo.container}>
      <View>
        <Text style = {estilo.titulo}>Lugares para viajar</Text>
      </View>
      <ScrollView>
        <View style = {estilo.container}>
          <Text style = {estilo.subtitulo}>Melhores opções</Text>

          <Text>{'\n'}Cidade grande{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/cidade.jpeg")}/>

          <Text>{'\n'}chalé{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/chale1.jpeg")}/>

          <Text>{'\n'}praia{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/praia.jpeg")}/>

          <Text>{'\n'}parque de diversões{'\n'}</Text>
          <Image style = {estilo.img} source = {require("./assets/parque.jpeg")}/>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems : 'center',
    backgroundColor: "#FFFFE8",
    padding: 20,
  },
  titulo:{
    fontSize: 30,
    color: "#FFD4D4",
    marginBottom: 10
  },
  img:{
    width: 250,
    height: 250,
    margin: 20,
    borderRadius: 6,
  },
  subtitulo:{
    fontSize: 15,
    color: "#C9F4AA"
  }
})