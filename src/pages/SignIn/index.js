import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../../contexto/provider';



;

export default function SignIn() {
    const navigation = useNavigation();
    const { setAdm, adm, setUrlApi, urlApi, setNomeUser, setEmailUser, setNumeroUser, setImagemUser, setIdUser, setIdAdm, setEmailAdm, setImagemAdm, setNumeroAdm } = useContext(Context)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setUrlApi('https://c972-2804-7f0-b900-9a1e-84cd-3c6a-c0a9-2910.ngrok-free.app');
    }, [urlApi])


    const login = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${urlApi}/api/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, senha: senha })
            })

            const data = await response.json();

            if (data.message === 'Login como administrador bem-sucedido') {
                navigation.replace('InicioAdm')
                setAdm(true)
                setIdAdm(data['0'].id_admin)
                setEmailAdm(data['0'].email_admin)
                setImagemAdm(data['0'].imagem_admin)
                setNumeroAdm(data['0'].numero_admin)
            } else if (data.message === 'Login como usuário bem-sucedido.') {
                navigation.replace('InicioUser')
                setIdUser(data['0'].id_usuario)
                setNomeUser(data['0'].nome_usuario)
                setEmailUser(data['0'].email_usuario)
                setNumeroUser(data['0'].numero_usuario)
                setImagemUser(data['0'].imagem_usuario)
            }else{
                alert("email ou senha incorretos")
            }

            console.log(data)
        } catch (error) {
            console.error('Erro:', error);
        } finally {
            setLoading(false)
        }


    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Start')}
                    style={{ width: "90%" }}>
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Image
                    source={require('../../imagens/start/dog.png')}
                    style={styles.imgDog}
                />
                <View style={styles.containerLogin}>
                    <Image
                        source={require('../../imagens/start/comunitario.png')}
                        style={styles.logo}
                    />

                    <View style={{ width: "100%", alignItems: "center", gap: 15 }}>
                        <TextInput
                            placeholder='Digite seu email'
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Digite sua senha'
                            onChangeText={(text) => setSenha(text)}
                            style={styles.input}
                        />
                    </View>

                    {loading ? (
                         <TouchableOpacity
                         onPress={login}
                         style={styles.botao}>
                          <ActivityIndicator size='small' color="blue" />
                     </TouchableOpacity>
                      
                    ) : (
                        <TouchableOpacity
                            onPress={login}
                            style={styles.botao}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    )}

                </View>
            </ScrollView>

            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccf3dc',

        justifyContent: 'flex-end',
    },
    containerLogin: {
        backgroundColor: "#fff",
        height: '50%',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        justifyContent: "space-around"
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccf3dc',
        padding: 10,
        paddingLeft: 15,
        width: '80%'
    },
    titulo: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#ccf3dc',
        padding: 20,
        width: '80%',
        alignItems: "center",
        borderRadius: 5
    },
    imgDog: {

        width: 300,
        zIndex: 1,
    },
    logo: {
        width: 310,
        height: 120
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});