import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Animated, Keyboard, Pressable, Button } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Bar } from 'react-native-progress';
import RNPickerSelect from 'react-native-picker-select';
import { Context } from '../../../contexto/provider';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { storage } from '../../../service/conexaoFirebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
const Post = () => {
    const { urlApi } = useContext(Context)
    const [image, setImage] = useState('');
    const [urlImage, setUrlImage] = useState('')
    const totalSteps = 7;
    const [step, setStep] = useState(1);
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState([])
    const [tipoPet, setTipoPet] = useState(null)
    const [pet, setPet] = useState(null)
    const [genero, setGenero] = useState([])
    const [idadePet, setIdadePet] = useState(null)
    const [idade, setIdade] = useState([])
    const [arrayCuidado, setArrayCuidado] = useState([])
    const [cuidadoPet, setCuidadoPet] = useState([])
    const [arrayTemperamento, setArrayTemperamento] = useState([])
    const [temperamentoPet, setTemperamentoPet] = useState([])
    const [racaPet, setRacaPet] = useState(null)
    const [loading, setLoading] = useState(false);
    const keyboardHeight = useRef(new Animated.Value(0)).current;




    useEffect(() => {
        const fetchGenero = async () => {
            try {
                const response = await fetch(`${urlApi}/api/genero`, {
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
                const response = await fetch(`${urlApi}/api/idade`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json();

                setIdade(data)

            } catch (error) {
                console.log(error)
            }

        }
        const fetchTipo = async () => {
            try {
                const response = await fetch(`${urlApi}/api/tipoPet`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json();

                setTipo(data)

            } catch (error) {
                console.log(error)
            }

        }
        const fetchCuidados = async () => {
            try {
                const response = await fetch(`${urlApi}/api/cuidado`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json()
                setArrayCuidado(data)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchTemperamento = async () => {
            try {
                const response = await fetch(`${urlApi}/api/temperamento`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const data = await response.json()
                setArrayTemperamento(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchGenero()
        fetchIdade()
        fetchTipo()
        fetchCuidados()
        fetchTemperamento()
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

    const btnBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };



    const handleCuidadoPress = (item) => {
        if (cuidadoPet.includes(item.id_cuidado)) {
            setCuidadoPet(cuidadoPet.filter(cuidado => cuidado !== item.id_cuidado));
        } else {
            // Caso contrário, adiciona-o
            setCuidadoPet([...cuidadoPet, item.id_cuidado]);
        }
    }


    const handleTempePress = (item) => {
        if (temperamentoPet.includes(item.id_temperamento)) {
            setTemperamentoPet(temperamentoPet.filter(temperamento => temperamento !== item.id_temperamento));
        } else {
            setTemperamentoPet([...temperamentoPet, item.id_temperamento]);
        }
    };

    const cadastrarPet = async () => {
        
        try {
          
            const response = await fetch(`${urlApi}/api/cadastrarPet`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomePet: nome,
                    tipoPet: tipoPet,
                    idadePet: idadePet,
                    generoPet: pet,
                    racaPet: racaPet,
                    cuidadoPet: cuidadoPet,
                    temperamentoPet: temperamentoPet,
                    imagemPet: urlImage,
                })
            });




            const data = await response.json();
            console.log('Pet cadastrado com sucesso:', data);
            setNome('')
            setTipoPet('')
            setIdadePet('')
            setPet('')
            setRacaPet('')
            setCuidadoPet('')
            setTemperamentoPet('')
            setImage('')
            setUrlImage('')
            setStep(1)

        } catch (error) {
            console.error('Erro ao cadastrar o pet:', error);
        }
    };

    const pickImage = async () => {
     
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

        const url = await uploadImage(result.assets[0].uri);
       console.log(url)
            setUrlImage(url);
        

    };

    const uploadImage = async (imageUri) => {
        setLoading(true);
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const filename = imageUri.split('/').pop();
        const imageRef = ref(storage, `pets/${filename}`);

     
        try {
            await uploadBytes(imageRef, blob);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>

            <Image
                source={require("../../../imagens/fundoPet.png")}
                style={styles.img}
            />
            <View style={{
                width: '90%', marginTop: 120

            }}>
                <Bar progress={progress} width={null} color="black" style={styles.progressBar} />
            </View>
            {step > 1 && (
                <Pressable onPress={btnBack} style={{ position: "absolute", top: 60, left: 10, padding: 10 }} accessibilityLabel="Voltar">
                    <EvilIcons name="arrow-left" size={34} color="black" />
                </Pressable>
            )}
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
                    <Text style={styles.text}>Cuidados veterinarios de {nome}</Text>
                    <View style={styles.containerBtnCuidado}>

                        {arrayCuidado.map((item, index) => (
                            <View key={index}>
                                <Pressable
                                    onPress={() => handleCuidadoPress(item)}
                                    style={[
                                        styles.selectCuidado,
                                        cuidadoPet.includes(item.id_cuidado) ? styles.cuidadoSelecionado : null,
                                    ]}
                                >
                                    <Text>
                                        {item.desc_cuidado}
                                    </Text>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                    {cuidadoPet.length === 0 ? (
                        <Pressable style={[styles.button, { backgroundColor: '#dfdfdf' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    ) : (
                        <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    )}

                </View>

            )}
            {step === 6 && (
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>temperamento de {nome}</Text>
                    <View style={styles.containerBtnCuidado}>

                        {arrayTemperamento.map((item, index) => (
                            <View key={index}>
                                <Pressable
                                    onPress={() => handleTempePress(item)}
                                    style={[
                                        styles.selectCuidado,
                                        temperamentoPet.includes(item.id_temperamento) ? styles.cuidadoSelecionado : null,
                                    ]}
                                >
                                    <Text>
                                        {item.desc_temperamento}
                                    </Text>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                    {temperamentoPet.length === 0 ? (
                        <Pressable style={[styles.button, { backgroundColor: '#dfdfdf' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    ) : (
                        <Pressable onPress={nextStep} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    )}
                </View>

            )}
            {step === 7 && (
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>imagem de {nome}</Text>
                    <View style={styles.containerBtnCuidado}>

                    { urlImage !== '' ? (
                <Image
                    source={{ uri: urlImage }}
                    style={styles.image}
                />
            ) : (
                <Pressable
                    style={styles.btnCamera}
                    onPress={pickImage}>
                    <Ionicons name="camera-outline" size={24} color="black" />
                </Pressable>
            )}


                    </View>
                    {image === null ? (
                        <Pressable style={[styles.button, { backgroundColor: '#dfdfdf' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    ) : (
                        <Pressable onPress={cadastrarPet} style={[styles.button, { backgroundColor: '#ccf3dc' }]}>
                            <EvilIcons name="arrow-right" size={24} color="black" />
                        </Pressable>

                    )}
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
    containerBtnCuidado: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        alignItems: "center",
        justifyContent: 'center',

    },
    selectCuidado: {
        backgroundColor: '#ccf3dc',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 7
    },
    cuidadoSelecionado: {
        backgroundColor: 'white',
        borderColor: 'gray'
    },
    btnCamera: {
        backgroundColor: '#ccf3dc',
        padding: 80,
        borderRadius: 5
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5
    },
});

export default Post;