// App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PerfilUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default PerfilUser;