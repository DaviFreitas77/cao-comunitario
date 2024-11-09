import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../../contexto/provider';
import axios from 'axios';
;

export default function SignIn() {
    const navigation = useNavigation(); 
    const {setAdm,adm,setUrlApi,urlApi} = useContext(Context)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(()=>{
        setUrlApi('https://70aa-2804-7f0-b900-a8c4-6151-944f-64f-fc58.ngrok-free.app');
    },[urlApi])


    const login = async() => {
        try{
            const response = await fetch(`${urlApi}/api/loginUsuario`,{
               method: "POST",
               headers:{
                'Content-Type':'application/json',
               },
               body:JSON.stringify({email:email,senha:senha})
            })

            const data = await response.json();

            if(data.message === 'Login como administrador bem-sucedido'){
               navigation.navigate('InicioAdm')
            }else if(data.message === 'Login como usuário bem-sucedido.'){
                navigation.navigate('InicioUser')
            }
            
            console.log(data)
        }catch(error){
            console.error('Erro:', error);
        }
        
        
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Start')}
            style={{width:"90%"}}>
            <FontAwesome name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Image
                source={require('../../imagens/login/dog.png')}
                style={styles.imgDog}
            />
            <View style={styles.containerLogin}>
            <Image
                    source={require('../../imagens/login/comunitario.png')}
                    style={styles.logo}
                />

                <View style={{width:"100%",alignItems:"center",gap:15}}>
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

                <TouchableOpacity 
                onPress={login}
                style={styles.botao}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccf3dc',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerLogin: {
        backgroundColor: "#fff",
        height:'50%',
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
    botao:{
        backgroundColor:'#ccf3dc',
        padding:20,
        width:'80%',
        alignItems:"center",
        borderRadius:5
    },
    imgDog:{
       
        width: 300, 
        zIndex: 1, 
    },
    logo: {
        width: 310,
         height: 120
    },
});
