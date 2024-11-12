import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../../contexto/provider';
import AppLoading from 'expo-app-loading';

export default function SignUp() {
    const navigation = useNavigation(); 
    

    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {urlApi} = useContext(Context)

   



    const cadastrar = async () => {
        try {
            const response = await fetch(`${urlApi}/api/cadastroUsuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ 
                    nome_usuario: nome,
                    email_usuario: email,
                    senha_usuario: senha,
                    telefone_usuario: numero,
                    imagem_usuario: 'https://firebasestorage.googleapis.com/v0/b/caocomunitario-14068.appspot.com/o/usuario%2Ffoto.jpg?alt=media&token=9a11cf8b-5188-4d54-a30c-38e1d67b7696',
                })
            });
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={20}
        >


            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <TouchableOpacity
                onPress={() => navigation.navigate('Start')}
                style={{ width: "90%", marginHorizontal:10,
                    height:90,justifyContent:"flex-end"
                 }}
            >
                <FontAwesome name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Image
                source={require('../../imagens/login/dog.png')}
                style={styles.imgDog}
            />
                <View style={styles.containerLogin}>
                    <View style={styles.inputsContainer}>
                        <TextInput
                            placeholder='Digite seu nome'
                            onChangeText={(text) => setNome(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Digite seu melhor email'
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Digite sua senha'
                            onChangeText={(text) => setSenha(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                        <TextInput
                            placeholder='Digite seu número/whatsapp'
                            onChangeText={(text) => setNumero(text)}
                            style={styles.input}
                            keyboardType='number-pad'
                        />

                        <TouchableOpacity
                        onPress={cadastrar}
                        style={styles.botao}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerLogin: {
        backgroundColor: "#fff",
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    inputsContainer: {
        width: "100%",
        alignItems: "center",
        gap: 15,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccf3dc',
        padding: 10,
        paddingLeft: 15,
        width: '80%',
    },
    botao: {
        backgroundColor: '#ccf3dc',
        padding: 20,
        width: '80%',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    imgDog: {
        width: 300,
    

    },
});
