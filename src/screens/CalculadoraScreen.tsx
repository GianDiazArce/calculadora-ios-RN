import React from 'react'
import { Text, View } from 'react-native'
import BotonCalc from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



const CalculadoraScreen = () => {

    const { 
        armarNumero,
        btnCalcular,
        btnDelete,
        btnDividir,
        btnMultiplicar, 
        btnRestar,
        btnSumar,
        limpiar,
        positivoNegativo,
        numero,
        numeroAnterior 
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer }>
            {
                (numeroAnterior !== '0') && ( <Text style={styles.resultadoPequeno}> { numeroAnterior } </Text>)
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

            <View style={ styles.fila }>
                {/* boton */}
                <BotonCalc title="C" color="grisClaro" action={ limpiar } />
                <BotonCalc title="+/-" color="grisClaro" action={ positivoNegativo } />
                <BotonCalc title="del" color="grisClaro" action={ btnDelete } />
                <BotonCalc title="/" color="naranja" action={ btnDividir } />
                {/* COLOR GRISS  #2D2D2D */}
                {/* COLOR NARANJA #FF9427 */}
            </View>
            <View style={ styles.fila }>
                {/* boton */}
                <BotonCalc title="7" action={ armarNumero } />
                <BotonCalc title="8" action={ armarNumero } />
                <BotonCalc title="9" action={ armarNumero } />
                <BotonCalc title="X" color="naranja" action={ btnMultiplicar } />
            </View>
            <View style={ styles.fila }>
                {/* boton */}
                <BotonCalc title="4" action={ armarNumero } />
                <BotonCalc title="5" action={ armarNumero } />
                <BotonCalc title="6" action={ armarNumero }  />
                <BotonCalc title="-" color="naranja" agrandar action={ btnRestar } />
            </View>
            <View style={ styles.fila }>
                {/* boton */}
                <BotonCalc title="1" action={ armarNumero } />
                <BotonCalc title="2" action={ armarNumero } />
                <BotonCalc title="3" action={ armarNumero } />
                <BotonCalc title="+" color="naranja" agrandar action={ btnSumar } />
            </View>
            <View style={ styles.fila }>
                {/* boton */}
                <BotonCalc title="0" action={ armarNumero } ancho />
                <BotonCalc title="." action={ armarNumero } />
                <BotonCalc title="=" color="naranja" agrandar action={ btnCalcular } />
            </View>
        </View>
    )
}

export default CalculadoraScreen

// const styles = StyleSheet.create({})
