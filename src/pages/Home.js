import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CalculoContext } from '../context/calculo';

export default function Home() {
    const navigation = useNavigation();
    const { consumptionCalculation} = useContext(CalculoContext);

    const [kms, setKms] = useState(0.0001);
    const [litros, setLitros] = useState(0.0001);

    function calcular(){
        consumptionCalculation(kms, litros);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Calcule a média de consumo do seu veículo:</Text>

      <TextInput 
        style={styles.inputArea}
        placeholder="Quilometragem (KM)"
        keyboardType="number-pad"
        value={kms}
        onChangeText={ (value) => setKms(value)}
      />

      <TextInput 
        style={styles.inputArea}
        placeholder="Litros de gasolina consumidos"
        keyboardType="number-pad"
        value={litros}
        onChangeText={ (value) => setLitros(value)}
      />
      
      <TouchableOpacity style={styles.buttonArea} onPress={() => {
        calcular();
        navigation.navigate('Resultado');
        setKms(0.0001);
        setLitros(0.0001);
      }}>
          <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  titleText:{
    fontSize: 18,
    marginBottom: '10%'
  },
  inputArea: {
    width: '85%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: '10%',
    alignItems: 'center'
  },
  buttonArea: {
    width: '50%',
    height: 45,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8
  },
  buttonText: {
      fontSize: 17
  }
});
