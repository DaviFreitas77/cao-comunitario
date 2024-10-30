import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Provider from './contexto/provider';

//usuario pagina
import Start from './paginas/Start';
import SignIn from './paginas/SignIn';
import SignUp from './paginas/SignUp';
import InicioUser from './paginas/InicioUser';
import Favorito from './paginas/favoritos';
import PerfilUser from './paginas/PerfilUser';
import EditarPerfil from './paginas/PerfilUser/editar';
import Sobre from './Componentes/Sobre';

//ADM pagina
import InicioAdm from './paginas/areaAdm/InicioAdm';
import PerfilAdm from './paginas/areaAdm/perfilAdm';
import EditarPerfilAdm from './paginas/areaAdm/perfilAdm/editar';
import Post from './paginas/areaAdm/Post';


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
        headerShown: false,
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
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{
          headerShown: true, headerTitle: "Meu perfil", headerTitleAlign: 'center',

        }} />
       
        <Stack.Screen name="Sobre" component={Sobre} options={{
          headerShown: true, headerTitle: "Sobre nós", headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#ccf3dc',
            
          }

        }} />
       

        {/* ADM PAGINA */}
        <Stack.Screen name="InicioAdm" component={TabAdm} options={{
          headerShown: false

        }} />
        <Stack.Screen name="EditarPerfilAdm" component={EditarPerfilAdm} options={{
          headerShown: false

        }} />
        <Stack.Screen name="Post" component={Post} options={{
          headerShown: false

        }} />
       
      </Stack.Navigator>
    </Provider>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}