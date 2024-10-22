import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function SignIn() {
    const navigation = useNavigation(); 
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    if (!fontsLoaded) {
        return <AppLoading />;
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
           
                <View style={{width:"100%",alignItems:"center",gap:15}}>
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
                    />
                    <TextInput
                        placeholder='Digite seu número/whatsap'
                        onChangeText={(text) => setNumero(text)}
                        style={styles.input}
                        keyboardType='number-pad'
                    />
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>
                        Cadastrar
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
