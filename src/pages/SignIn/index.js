import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../../contexto/provider';
import Entypo from '@expo/vector-icons/Entypo';
import Toast from 'react-native-toast-message';







export default function SignIn() {
    const navigation = useNavigation();
    
    const { setAdm, adm, setUrlApi, urlApi, setNomeUser, setEmailUser, setNumeroUser, setImagemUser, setIdUser, setIdAdm, setEmailAdm, setImagemAdm, setNumeroAdm,token,setToken } = useContext(Context)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false)




       
    const showToast = (message,type) => {
        Toast.show({
          type: type, 
          text1:message,
          position: 'top', 
        });
      };


    useEffect(() => {
        setUrlApi('https://ac99-2804-7f0-b900-9a1e-d1e6-c711-b66b-117.ngrok-free.app');
    }, [urlApi])


    const login = async () => {
        if(!email || !senha ){
            showToast("Preencha todos os campos",'error')

            return;
        }
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
                navigation.navigate('InicioUser')
                setIdUser(data['0'].id_usuario)
                setNomeUser(data['0'].nome_usuario)
                setEmailUser(data['0'].email_usuario)
                setNumeroUser(data['0'].numero_usuario)
                setImagemUser(data['0'].imagem_usuario)
              
            } else {
                showToast("email ou senha incorretos",'error')
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
                <Toast/>
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
                            secureTextEntry={!mostrarSenha}
                        />
                        <TouchableOpacity
                            onPress={() => setMostrarSenha(!mostrarSenha)}
                            style={styles.eye}>

                            <Entypo name={mostrarSenha ? "eye" : "eye-with-line"} size={24} color="black" />
                        </TouchableOpacity>
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
    eye: {
        position: "absolute",
        top: 63,
        right: 60,
    }
});
