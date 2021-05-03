import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = ( numeroTexto: string ) => {

        // No aceptar doble punto
        if( numero.includes('.') && numeroTexto === '.' ) return;

        if( numero.startsWith( '0') || numero.startsWith('-0') ){
            // punto decimal
            if( numeroTexto === '.' ){
                setNumero( numero + numeroTexto );

                // Evaluar si es otro cero, y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.') ){
                setNumero( numero + numeroTexto );

                // Evaluar si es diferente de cero y no tiene un punto
            } else if( numeroTexto !== '0' && !numero.includes('.') ){
                setNumero( numeroTexto )

                // Evitar el 00000.0
            } else if ( numeroTexto === '0' && !numero.includes('.') ){
                setNumero( numero )
            } else if ( numero === 'NaN' ){
                return;
            } else {
                setNumero(numero + numeroTexto)
            }
        } else {
            setNumero(numero + numeroTexto)

        }

    }

    const positivoNegativo = () => {
        if( numero.includes('-') ){
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }

    const btnDelete = () => {
        // numero.charAt(numero.length - 1)
        let negativo = '';
        let numeroTemp = numero;
        if(numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }

        // if( numero.length === 1 || numero === '-0' ){
        //     setNumero('0')
        // } else {
        //     setNumero( numero.slice( 0, numero.length - 1 ) )

        // }
    }

    const cambiarNumPorAnterior = () => {
        
        if(numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0,-1) );
        } else {
            setNumeroAnterior( numero );
        }
        setNumero('0')
    
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        // btnCalcular()
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const btnCalcular = () => {
        
        const num1 = Number( numeroAnterior );
        const num2 = Number( numero );
        if( num2 && !num1){
            return setNumero(`${num2}`)
        }
        // if( num1 === 0 && num2 === 0) {
        //     return setNumero('0');
        // } 

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` );
                break;
            case Operadores.restar:
                setNumero( `${ num1 - num2 }` );
                break;
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` );
                break;
            case Operadores.dividir:
                setNumero( `${ num1 / num2 }` );
                break;
        
            // default:
            //     break;
        }
        setNumeroAnterior('0');

    }

    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        btnCalcular,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        numero,
        numeroAnterior
    }
}