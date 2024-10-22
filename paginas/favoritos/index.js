// App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Favorito = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favoritos</Text>
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

export default Favorito;