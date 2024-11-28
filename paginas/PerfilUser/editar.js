import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import EditImage from '../../Componentes/EditFoto';
import { Context } from '../../contexto/provider';

const EditarPerfil = () => {
  const { nomeUser, emailUser, numeroUser, imagemUser, idUser, urlApi, setNomeUser, setNumeroUser, setImagemUser } = useContext(Context);
  const [editNome, setEditNome] = useState(false);
  const [editNumero, setEditNumero] = useState(false);
  const [novoNome, setNovoNome] = useState(nomeUser);
  const [novoNumero, setNovoNumero] = useState(numeroUser);



  const atualizarDados = async () => {
    try {

      const response = await fetch(`${urlApi}/api/atualizar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: idUser,
          novoNome: novoNome,
          novoNumero: novoNumero
        })
      });

      const data = await response.json();
      console.log(data)
      setNomeUser(novoNome)
      setNumeroUser(novoNumero)
      setEditNome(false);
      setEditNumero(false);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>

        <EditImage />
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
