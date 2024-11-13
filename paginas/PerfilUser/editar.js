import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import { storage } from '../../service/conexaoFirebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Context } from '../../contexto/provider';

const EditarPerfil = () => {
  const { nomeUser, emailUser, numeroUser, imagemUser,idUser,urlApi,setNomeUser,setNumeroUser,setImagemUser} = useContext(Context);
  const [editNome, setEditNome] = useState(false);
  const [editNumero, setEditNumero] = useState(false);
  const [novoNome, setNovoNome] = useState(nomeUser);
  const [novoNumero, setNovoNumero] = useState(numeroUser);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissões para acessar a galeria.');
        return;
      }
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  

  
      if (!result.canceled) {
        const url = await uploadImage(result.assets[0].uri); 
  
        if(url) {
         
          try {
            const response = await fetch(`${urlApi}/api/atualizar`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: idUser,
                urlImagem: url  
              })
            });
  
            const data = await response.json(); 
            setImagemUser(url);
  
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.error("Erro ao escolher a imagem:", error); 
    
    }
  };
  
  const uploadImage = async (uri) => {
    try {
      const filename = uri.split('/').pop();
      const storageRef = ref(storage, `images/${filename}`);
      const response = await fetch(uri);
      if (!response.ok) throw new Error('Falha ao buscar imagem');
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      return url;  
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      return null;
    }
  };
  
  const atualizarDados = async() => {
    try{

      const response = await fetch(`${urlApi}/api/atualizar`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          id:idUser,
          novoNome:novoNome,
          novoNumero:novoNumero
        })
      });
     
      const data = await response.json();
      console.log(data)
      setNomeUser(novoNome)
      setNumeroUser(novoNumero)
      setEditNome(false);
      setEditNumero(false);
    }catch(error){
      console.log(error)
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>
        
        <View>
          <Image
            source={{ uri: imagemUser }}
            style={styles.imgPerfil}
          />
          <Pressable 
          onPress={pickImage}
          style={styles.iconCamera}>
            <MaterialCommunityIcons name="camera-plus" size={20} color="black" />
          </Pressable>
        </View>

        <View style={styles.containerInputs}>
          <Pressable
            onPress={() => setEditNome(!editNome)}
            style={styles.inputNome}>
            <Text style={styles.tituloInput}>Nome e sobrenome</Text>
            {editNome ? (
              <TextInput
                style={styles.txtInput}
                placeholder='Novo nome'
                value={novoNome}
                onChangeText={setNovoNome}
                autoFocus
              />
            ) : (
              <Text style={styles.txtInput}>{novoNome}</Text>
            )}
          </Pressable>

          <Pressable style={styles.inputNome}>
            <Text style={styles.tituloInput}>Email</Text>
            <Text style={{ color: "gray" }}>{emailUser}</Text>
          </Pressable>

          <Pressable
            onPress={() => setEditNumero(!editNumero)}
            style={styles.inputNome}>
            <Text style={styles.tituloInput}>Celular</Text>
            {editNumero ? (
              <TextInput
                style={styles.txtInput}
                placeholder='Novo número'
                value={novoNumero}
                onChangeText={setNovoNumero}
                autoFocus
              />
            ) : (
              <Text>{novoNumero}</Text>
            )}
          </Pressable>
        </View>

        <Pressable style={styles.btnAtualizar} onPress={atualizarDados}>
          <Text style={styles.txtBotao}>Atualizar dados</Text>
        </Pressable>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imgPerfil: {
    width: 120,
    height: 120,
    borderRadius: 80,
  },
  containerInputs: {
    width: '100%',
    marginTop: 20,
  },
  inputNome: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginVertical: 10,
  },
  tituloInput: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  txtInput: {
    fontSize: 16,
    color: 'black',
  },
  iconCamera: {
    position: "absolute",
    top: 70,
    left: 100,
    backgroundColor: "#ccf3dc",
    padding: 5,
    borderRadius: 40,
  },
  btnAtualizar: {
    backgroundColor: "#ccf3dc",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  txtBotao: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default EditarPerfil;
