import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const Stack = createNativeStackNavigator();

import Start from './paginas/Start';
import SignIn from './paginas/SignIn';
import SignUp from './paginas/SignUp';
import InicioUser from './paginas/InicioUser';

function MyStack() {
  return (
    <NavigationContainer >
       <Stack.Navigator initialRouteName='Start' >
      <Stack.Screen name="Start" component={Start}  options={{headerShown: false}}/>
      <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="InicioUser" component={InicioUser} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default MyStack;