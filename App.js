import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Start from './paginas/Start';
import SignIn from './paginas/SignIn';
import SignUp from './paginas/SignUp';
import InicioUser from './paginas/InicioUser';
import Favorito from './paginas/favoritos';

import PerfilUser from './paginas/PerfilUser';
import EditarPerfil from './paginas/PerfilUser/editar';

// Create a Tab Navigator
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


function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Start'>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="InicioUser" component={TabNavigator} options={{ headerShown: false }} />

      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{
        headerShown: true, headerTitle: "Meu perfil",headerTitleAlign: 'center',

        

      }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}