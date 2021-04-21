import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalculoContext } from '../context/calculo';

function Comparacoes(){
    const { resultCalc } = useContext(CalculoContext);
  
    if(resultCalc <= 4 && resultCalc > 0){
        const color = {
            backgroundColor: 'red'
        };

        return(
            <View style={[styles.areaView, color]}>
                <Text style={styles.textView}>E</Text>
            </View>
        )
    }else if(resultCalc > 4 && resultCalc <= 8){
        const color = {
            backgroundColor: 'orange'
        };

        return(
            <View style={[styles.areaView, color]}>
                <Text style={styles.textView}>D</Text>
            </View>
        )
    }else if(resultCalc > 8 && resultCalc <= 10){
        const color = {
            backgroundColor: 'yellow'
        };

        return(
            <View style={[styles.areaView, color]}>
                <Text style={styles.textView}>C</Text>
            </View>
        )
    }else if(resultCalc > 10 && resultCalc <= 12){
        const color = {
            backgroundColor: '#9da723'
        };

        return(
            <View style={[styles.areaView, color]}>
                <Text style={styles.textView}>B</Text>
            </View>
        )
    }else if(resultCalc > 12){
        const color = {
            backgroundColor: 'green'
        };

        return(
            <View style={[styles.areaView, color]}>
                <Text style={styles.textView}>A</Text>
            </View>
        )
    }else if(resultCalc === 0){
        return(
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Volte e preencha um valor válido!</Text>
            </View>
        );
    }
}

export default function Resultado() {
    const { resultCalc } = useContext(CalculoContext);

    return (
        <View style={styles.container}>
            <View style={styles.containerSec}>
                <Text style={styles.textTitle}>Média de consumo do seu veículo é</Text>
                <Text style={styles.textResult}>{`${resultCalc} Km/l`}</Text>
            </View>
            <View style={styles.containerSec}>
                <Text style={styles.textTitle}>Nível de consumo do seu Veículo é</Text>
                <Comparacoes />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSec: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'black',
        margin: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
        opacity: 2
    },
    areaView: {
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderWidth: 0.5,
        borderColor: 'black',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 20
    },
    textTitle: {
        fontSize: 20,
        marginBottom: '10%',
    },
    textResult: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});