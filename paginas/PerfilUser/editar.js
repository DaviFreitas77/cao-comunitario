// App.js

import React from 'react';
import { StyleSheet, Text, View,Image,TextInput, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const EditarPerfil = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image 
                source={require("../../imagens/inicioUser/user.png")}
                style={styles.imgPerfil}
            />
            <View style={styles.iconCamera}>
                <MaterialCommunityIcons name="camera-plus" size={20} color="black" />
            </View>
        </View>
        <View style={styles.containerInputs}>
            <Pressable style={styles.inputNome}>
                <Text style={styles.tituloInput}>Nome e sobrenome</Text>
                <Text> Davi Freitas </Text>
            </Pressable>

            <Pressable style={styles.inputNome}>
                <Text style={styles.tituloInput}>Email</Text>
                <Text style={{color:"gray"}}>davi@gmail.com</Text>
            </Pressable>

            <Pressable style={styles.inputNome}>
                <Text style={styles.tituloInput}>Celular</Text>
                <Text> (11) 95204-1574 </Text>
            </Pressable>
        </View>
        <Pressable style={styles.btnAtualizar}>
            <Text style={styles.txtBotao}>Atualizar dados</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:20,
    gap:60
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imgPerfil:{
    width:120,
    height:120,
    borderRadius:80
  },
  containerInputs:{
    width:'100%',
    gap:20,
    flex:.8
  },        
  inputNome:{
    borderBottomWidth:1,
    paddingBottom:8,
    gap:5,
  },
  tituloInput:{
    fontWeight:"bold",
    marginLeft:4
  },
  iconCamera:{
    position:"absolute",
    top:70,
    left:100,
    backgroundColor:"#ccf3dc",
    padding:5,
    borderRadius:40
  },
  btnAtualizar:{
    backgroundColor:"#ccf3dc",
    paddingHorizontal:100,
    paddingVertical:20,
    borderRadius:20
  },
  txtBotao:{
    fontWeight:"bold",
    fontSize:17
  }
});

export default EditarPerfil;