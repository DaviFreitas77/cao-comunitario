import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Categoria from '../../Componentes/Categoria';
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

          
                <Categoria/>
          

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
        backgroundColor: 'white',
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
    containerAnimal:{
        flexDirection:"row",
        flex:.7,
        gap:20,
        flexWrap:'wrap',
        width:"100%",
        alignItems:"center",
        justifyContent:'center',
        marginTop:15
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
        borderBottomRightRadius:20
    },
    containerDesc:{
        flexDirection:"row",
        gap:8,
        justifyContent:"space-between"
    }
   
});

export default InicioUser;