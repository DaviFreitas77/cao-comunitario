import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Animated, Keyboard, Pressable } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Bar } from 'react-native-progress';
import RNPickerSelect from 'react-native-picker-select';

const Post = () => {
    const totalSteps = 7;
    const [step, setStep] = useState(1);

    const [nome, setNome] = useState('');

    const [tipo, setTipo] = useState([])

    const [tipoPet, setTipoPet] = useState(null)

    const [pet, setPet] = useState(null)
    const [genero, setGenero] = useState([])

    const [idadePet, setIdadePet] = useState(null)
    const [idade, setIdade] = useState([])


    const [racaPet, setRacaPet] = useState(null)

    const keyboardHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fetchGenero = async () => {
            try {
                const response = await fetch('https://df40-2804-82c4-9c-3700-5166-720f-829f-722e.ngrok-free.app/api/genero', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json();
                setGenero(data)

            } catch (error) {
                console.log(error)
            }

        }

        const fetchIdade = async () => {
            try {
                const response = await fetch('https://df40-2804-82c4-9c-3700-5166-720f-829f-722e.ngrok-free.app/api/idade', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json();
                console.log(data)
                setIdade(data)

            } catch (error) {
                console.log(error)
            }

        }
        const fetchTipo = async () => {
            try {
                const response = await fetch('https://df40-2804-82c4-9c-3700-5166-720f-829f-722e.ngrok-free.app/api/tipoPet', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json();
                console.log(data)
                setTipo(data)

            } catch (error) {
                console.log(error)
            }

        }
        fetchGenero()
        fetchIdade()
        fetchTipo()
    }, [])

    const progress = step / totalSteps;
    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            Animated.timing(keyboardHeight, {
                toValue: event.endCoordinates.height,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });

        const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
            Animated.timing(keyboardHeight, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        };
    }, [keyboardHeight]);


    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };




    return (
        <View style={styles.container}>

            <Image
                source={require("../../../imagens/fundoPet.png")}
                style={styles.img}
            />
            <View style={{
                width: '90%', marginTop: 60

            }}>
                <Bar progress={progress} width={null} color="black" style={styles.progressBar} />
            </View>
            {step === 1 && (

                <View style={styles.innerContainer}>

                    <Animated.View style={[styles.content, { paddingBottom: keyboardHeight }]}>
                        <Text style={styles.text}>Qual o nome do  pet?</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNome(text)}
                            placeholder="Digite o nome"
                            placeholderTextColor="#ccc"
                        />
                    </Animated.View>
                    {nome === '' ? (
                        <Pressable style={styles.button}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    ) : (
                        <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    )}

                </View>
            )}

            {step === 2 && (
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Que Animal é  {nome}?</Text>

                    <RNPickerSelect
                        placeholder={{
                            label: 'Selecione',
                            value: null,
                        }}
                        onValueChange={(value) => setTipoPet(value)}
                        items={tipo.map(g => ({
                            label: g.desc_tipo_pet,
                            value: g.id_tipo_pet,
                        }))}

                    />
                    {tipoPet === null ? (
                        <Pressable style={styles.button}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    ) : (
                        <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    )}
                </View>

            )}
            {step === 3 && (
                <View style={{ width: "100%", alignItems: "center", gap: 20 }}>

                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Qual a idade de  {nome}?</Text>

                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecione',
                                value: null,
                            }}
                            onValueChange={(value) => setIdadePet(value)}
                            items={idade.map(g => ({
                                label: g.desc_idade,
                                value: g.id_idade,
                            }))}

                        />

                    </View>

                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Qual gênero de  {nome}?</Text>

                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecione',
                                value: null,
                            }}
                            onValueChange={(value) => setPet(value)}
                            items={genero.map(g => ({
                                label: g.desc_genero,
                                value: g.id_genero,
                            }))}

                        />

                    </View>
                    {(pet && idadePet) === null ? (
                        <Pressable style={styles.button}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    ) : (
                        <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: 'white' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>
                    )}
                </View>


            )}
            {step === 4 && (
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{nome} tem alguma raça?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a raça ou deixe em branco"
                        placeholderTextColor="#ccc"
                        onChangeText={(text) => setRacaPet(text)}
                    />

                    <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                        <EvilIcons name="arrow-right" size={24} color="black" />
                    </Pressable>

                </View>

            )}
            {step === 5 && (
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{nome} Cuidados veterinarios de {nome}</Text>
                   

                    <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                        <EvilIcons name="arrow-right" size={24} color="black" />
                    </Pressable>

                </View>

            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 70,
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    innerContainer: {
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 20,
        width: '90%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    img: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        width: "100%",
    },
    input: {
        borderBottomWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: '100%',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    progressBar: {
        height: 7,
        borderColor: 'white',
        marginTop: 10,
        width: '100%'
    },
});

export default Post;