import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface props{
    title: string;
    color?: 'grisOscuro' | 'naranja' | 'grisClaro';
    agrandar? : boolean;
    ancho?: boolean;
    action: ( numeroTexto: string ) => void;
}

const BotonCalc = ({title, color="grisOscuro", agrandar = false, ancho = false, action}: props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={ () => action(title) }
        >
            <View style={[
                styles.boton,
                (color==="naranja") && styles.fondoNaranja,
                (color === 'grisClaro') && styles.fondoGrisClaro,
                ( ancho ) && styles.anchar
            ]}>
                <Text style={[ 
                    styles.botonTexto,
                    (color === 'grisOscuro' || color === 'naranja') && styles.letraBlanca,
                    ( agrandar ) && styles.letraGrande
                ]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BotonCalc

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        // alignItems: 'center'
    },
    botonTexto: {
        textAlign: 'center',
        fontSize: 30,
        padding: 10,
        color: 'black',
        fontWeight: '300',
    },
    fondoNaranja: {
        backgroundColor: '#FF9427',
    },
    fondoGrisClaro: {
        backgroundColor: '#9B9B9B',
    },
    letraBlanca: {
        color: 'white',
        fontWeight: '400',
        fontSize: 35
    },
    letraGrande: {
        fontSize: 45,
    },
    anchar: {
        width: 180
    }

})
