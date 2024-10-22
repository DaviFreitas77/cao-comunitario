import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
const InicioUser = () => {
    const [botaoFiltro, setBotaoFiltro] = useState('')
    const corOriginal = '#dfdfdfdf';
    const corAtivada = '#ccf3dc'

    const filtroAtivo = (item) => {
        setBotaoFiltro(item)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Image
                        source={require("../../imagens/inicioUser/user.png")}
                        style={styles.imgPerfil}
                    />
                    <Text style={styles.text}>Davi Freitas</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Pressable>
                        <EvilIcons name="search" size={35} color="black" />
                    </Pressable>

                    <Pressable>
                        <Ionicons name="notifications-outline" size={30} color="black" />
                    </Pressable>

                </View>
            </View>

            <View style={styles.containerCategorias}>
                <Text style={styles.txtCtegoria}>
                    Categorias
                </Text>

                <View style={styles.containerBotaoFiltro}>

                    <Pressable
                        onPress={() => filtroAtivo('Cachorro')}
                        style={[styles.botaoFiltro, { backgroundColor: botaoFiltro === 'Cachorro' ? corAtivada : corOriginal }]}>
                        <Image
                             source={require("../../imagens/inicioUser/cachorro.jpg")}
                            style={styles.imgBotaoFiltro}
                        />
                        <Text>Cachorro</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => filtroAtivo('Gato')}
                        style={[styles.botaoFiltro, { backgroundColor: botaoFiltro === 'Gato' ? corAtivada : corOriginal }]}>
                        <Image
                            source={require("../../imagens/inicioUser/gato.jpg")}
                            style={styles.imgBotaoFiltro}
                        />
                        <Text>Gato</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerAnimal}>
                    <View style={styles.card}>
                        <Image 
                               source={require("../../imagens/inicioUser/cachorro.jpg")}
                               style={styles.imgPet}
                        />
                        <View style={styles.descPet}>
                            <View style={styles.containerDesc}>
                                <View style={{flexDirection:"row",gap:10}}>
                                    <Text style={styles.nomePet}>
                                        Bob
                                    </Text>
                                    <Ionicons name="male-outline" size={24} color="blue" />
                                </View>

                                <AntDesign name="hearto" size={24} color="red" />
                            </View>
                            <View style={{flexDirection:"row",gap:5}}>
                                <Text style={styles.txtDesc}>Jovem |</Text>
                                <Text style={styles.txtDesc}>Poodle </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image 
                               source={require("../../imagens/inicioUser/cachorro.jpg")}
                               style={styles.imgPet}
                        />
                        <View style={styles.descPet}>
                            <View style={styles.containerDesc}>
                                <View style={{flexDirection:"row",gap:10}}>
                                    <Text style={styles.nomePet}>
                                        Bob
                                    </Text>
                                    <Ionicons name="male-outline" size={24} color="blue" />
                                </View>

                                <AntDesign name="hearto" size={24} color="red" />
                            </View>
                            <View style={{flexDirection:"row",gap:5}}>
                                <Text style={styles.txtDesc}>Jovem |</Text>
                                <Text style={styles.txtDesc}>Poodle </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image 
                               source={require("../../imagens/inicioUser/cachorro.jpg")}
                               style={styles.imgPet}
                        />
                        <View style={styles.descPet}>
                            <View style={styles.containerDesc}>
                                <View style={{flexDirection:"row",gap:10}}>
                                    <Text style={styles.nomePet}>
                                        Bob
                                    </Text>
                                    <Ionicons name="male-outline" size={24} color="blue" />
                                </View>

                                <AntDesign name="hearto" size={24} color="red" />
                            </View>
                            <View style={{flexDirection:"row",gap:5}}>
                                <Text style={styles.txtDesc}>Jovem |</Text>
                                <Text style={styles.txtDesc}>Poodle </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image 
                               source={require("../../imagens/inicioUser/cachorro.jpg")}
                               style={styles.imgPet}
                        />
                        <View style={styles.descPet}>
                            <View style={styles.containerDesc}>
                                <View style={{flexDirection:"row",gap:10}}>
                                    <Text style={styles.nomePet}>
                                        Bob
                                    </Text>
                                    <Ionicons name="male-outline" size={24} color="blue" />
                                </View>

                                <AntDesign name="hearto" size={24} color="red" />
                            </View>
                            <View style={{flexDirection:"row",gap:5}}>
                                <Text style={styles.txtDesc}>Jovem |</Text>
                                <Text style={styles.txtDesc}>Poodle </Text>
                            </View>
                        </View>
                    </View>
                    
                    

            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        gap: 40
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 40
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        width: "90%",
    },
    txtCtegoria: {
        fontWeight: 'bold',
        fontSize: 18
    },
    containerCategorias: {
        width: "90%",
        flex: .1,
        gap: 20
    },
    containerBotaoFiltro: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    botaoFiltro: {
        backgroundColor: "#dfdfdfdf",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10

    },
    imgBotaoFiltro: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    containerAnimal:{
        flexDirection:"row",
        flex:.7,
        gap:20,
        flexWrap:'wrap',
        width:"100%",
        alignItems:"center",
        justifyContent:'center'
    },
    imgPet:{
        width:180,
        height:150,
        borderTopLeftRadius:20,
  
    },
    nomePet:{
        fontSize:17,
        fontWeight:"bold"
    },
    descPet:{
        gap:10,
        backgroundColor:'#dfdfdfdf',
        paddingBottom:30,
        padding:10,
        borderBottomLeftRadius:20
    },
    containerDesc:{
        flexDirection:"row",
        gap:8,
        justifyContent:"space-between"
    }
   
});

export default InicioUser;