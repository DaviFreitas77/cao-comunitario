import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Feather from '@expo/vector-icons/Feather';
import Categoria from '../../../Componentes/Categoria';

export default function InicioAdm() {
    const data = [
        { id: 1, image: require('../../../imagens/carrossel/imgCarrossel.jpg') },
        { id: 2, image: require('../../../imagens/carrossel/imgCarrossel.jpg') },
        { id: 3, image: require('../../../imagens/carrossel/imgCarrossel.jpg') },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 18, color: 'gray' }}>Olá,</Text>
                    <Text style={{ fontSize: 22 }}>administrador</Text>
                </View>
                <Image
                    source={require("../../../imagens/inicioUser/user.png")}
                    style={styles.imgPerfil}
                />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.iconSearch}>
                    <Feather name="search" size={24} color="#ccf3dc" />
                </View>
                <TextInput
                    placeholder='Faça uma busca...'
                    style={styles.input}
                />
            </View>

            <Swiper  paginationStyle={styles.paginationStyle} style={styles.wrapper} showsPagination loop>
                {data.map((item) => (
                    <View key={item.id} style={styles.slide}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                ))}
            </Swiper>

            <View style={styles.cat}>
                <Categoria />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        paddingTop: 55,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },
    searchContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        padding: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 10,
        paddingLeft: 40,
    },
    iconSearch: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    wrapper: {
        height: 250,
        marginBottom: 30,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationStyle:{
        marginBottom:20
    },  
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    cat: {
        marginTop: 10,
    },
});
