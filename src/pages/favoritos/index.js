import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator
} from 'react-native';
import { Context } from '../../contexto/provider';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const Favorito = () => {
  const navigation = useNavigation();
  const { urlApi, idUser } = useContext(Context);
  const [pets, setPets] = useState([]);
  const [loading,setLoading] = useState(false)
  useFocusEffect(
    React.useCallback(() => {
      setLoading(true)
      const dataFavoritos = async () => {
        try {
          const response = await fetch(
            `${urlApi}/api/favoritos?fk_usuario=${idUser}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const data = await response.json();
          setPets(data);
         
        } catch (error) {
          console.log(error);
        }finally{

         setLoading(false)
        }
        
      };

      dataFavoritos();
    }, [idUser, urlApi]) 
  );

  const renderItem = ({ item }) => {
    return (
      
      <Pressable
        onPress={() => navigation.navigate('PetInfo', { pet: item })}
        style={styles.card}>
        <Image
          source={{ uri: item.imagem_pet }}
          style={styles.imgPet}
        />
        <View style={styles.descPet}>
          <Text style={styles.txtNome}>{item.nome_pet}</Text>
          <Text style={styles.txtInfo}>{item.desc_tipo_pet}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {loading ?(
        <View style={{flex:1,justifyContent:"center"}}>
          <ActivityIndicator  size='large' color="blue"/>
        </View>
      ):(
        <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_pet}
        numColumns={2} 
        showsHorizontalScrollIndicator={false}
      />
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  card: {
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    padding: 15,
    margin: 5, 
    shadowColor: '#000',
    alignItems: 'center',
    flex: 1, 
    maxWidth: '45%', 
    margin:10
  },
  imgPet: {
    width: '100%', 
    height: 140, 
    borderRadius: 10,
  },
  txtNome: {
    fontWeight: 'bold',
  },
  txtInfo: {
    color: 'gray',
    fontSize: 14,
    marginTop: 2,
  },
  descPet: {
    width: '100%',
    marginTop: 10,
  },
});

export default Favorito;