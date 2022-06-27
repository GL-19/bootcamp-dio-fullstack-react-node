import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 100);
    setNumero(novoNumero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity style={style.botao} onPress={handleNumero}>
        <Text style={style.texto}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  botao: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
