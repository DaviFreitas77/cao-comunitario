import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';

const Categoria = () => {
    const [botaoFiltro, setBotaoFiltro] = useState('')
    const corOriginal = '#dfdfdfdf';
    const corAtivada = '#ccf3dc'

    const filtroAtivo = (item) => {
        setBotaoFiltro(item)
    }
    return (

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

    );
};

const styles = StyleSheet.create({

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    containerCategorias: {
        width: "90%",
        flex: .1,
        gap: 20
    },
    txtCtegoria: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10, 
    },
    containerBotaoFiltro: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%', 
        paddingHorizontal: 20,
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


});

export default Categoria;
