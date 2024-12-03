import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Provider from './src/contexto/provider';

import Start from './src/pages/Start';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import InicioUser from './src/pages/InicioUser';
import PetInfo from './src/componentes/PetInfo';
import PerfilUser from './src/pages/PerfilUser';
import Favorito from './src/pages/favoritos';
import EditarPerfil from './src/pages/PerfilUser/editar';
import Sobre from './src/componentes/Sobre';
import Doacao from './src/pages/Doacao';
import TodosPets from './src/pages/TodosPets';
//adm
import InicioAdm from './src/pages/areaAdm/InicioAdm';
import Post from './src/pages/areaAdm/Post';
import PerfilAdm from './src/pages/areaAdm/PerfilAdm';
import EditarPerfilAdm from './src/pages/areaAdm/PerfilAdm/editar';
import TipoAnimal from './src/pages/areaAdm/Post/tipoAnimal';
import IdadePet from './src/pages/areaAdm/Post/idadePet';
import RacaPet from './src/pages/areaAdm/Post/racaPet';
import CuidadoPet from './src/pages/areaAdm/Post/cuidadoPet';
import TemperamentoPet from './src/pages/areaAdm/Post/temperamentoPet';
import ImagemPet from './src/pages/areaAdm/Post/imagemPet';
import SobrePet from './src/pages/areaAdm/Post/sobrePet';

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        }
      }}
    >
      <Tab.Screen name='InicioUser' component={InicioUser} options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color='black' size={26} />
        ),
      }} />

      <Tab.Screen name='Favorito' component={Favorito} options={{
        headerShown: true,
          headerTitle:"Favoritos",
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: '#ccf3dc',
           
          },
        
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => (
          <Feather name="heart" size={26} color="black" />
        ),
      }} />

      <Tab.Screen name='PerfilUser' component={PerfilUser} options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={26} color="black" />
        ),
      }} />



    </Tab.Navigator>
  );
}

function TabAdm() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        }
      }}>
      <Tab.Screen name='InicioAdm' component={InicioAdm} options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" size={26} color="black" />
        ),
      }} />
        <Tab.Screen name='Post' component={Post} options={{
          headerShown: false,
         
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={50} color="#ccf3dc" />
          ),
          tabBarStyle: { display: 'none' }
        }} />
      <Tab.Screen name='PerfilAdm' component={PerfilAdm} options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={26} color="black" />
        ),
      }} />
    </Tab.Navigator>


  )
}


function MyStack() {
  return (
    <Provider>
     <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="InicioUser" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="PetInfo" component={PetInfo} options={{ headerShown: false }} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
        <Stack.Screen name="TodosPets" component={TodosPets} options={{ headerShown: true ,
        headerTitle:"Todos Pets",
        headerTitleAlign:'center',
          headerStyle:{
            backgroundColor: '#ccf3dc',

          }
        }} />


        <Stack.Screen name="EditarPerfilAdm" component={EditarPerfilAdm} options={{ headerShown: false }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{
          headerShown: true, headerTitle: "Sobre nós", headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ccf3dc',

          }
        }} />

        <Stack.Screen name="InicioAdm" component={TabAdm} options={{ headerShown: false }} />
        <Stack.Screen name="tipoAnimal" component={TipoAnimal} options={{ headerShown: false }} />
        <Stack.Screen name="IdadePet" component={IdadePet} options={{ headerShown: false }} />
        <Stack.Screen name="RacaPet" component={RacaPet} options={{ headerShown: false }} />
        <Stack.Screen name="CuidadoPet" component={CuidadoPet} options={{ headerShown: false }} />
        <Stack.Screen name="TemperamentoPet" component={TemperamentoPet} options={{ headerShown: false }} />
        <Stack.Screen name="ImagemPet" component={ImagemPet} options={{ headerShown: false }} />
        <Stack.Screen name="SobrePet" component={SobrePet} options={{ headerShown: false }} />
        <Stack.Screen name="Doacao" component={Doacao} options={{
          headerShown: true, headerTitle: "Ajude o projeto", headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ccf3dc',

          }
        }}/>
      </Stack.Navigator>
    </Provider>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
