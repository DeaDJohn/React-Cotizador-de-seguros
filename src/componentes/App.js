import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';


class App extends Component {

    state = {
        resultado : '',
        datos: {}
    }

    cotizarSeguro = (datos) => {
        const {marca,plan,year} = datos;
        // console.log(datos);

        // Agregar una base de 2000
        let resultado = 2000;

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaAnio( year );
        console.log('La diferencia de año es ' + diferencia);

        // por cada año restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        // americano 15% asiatico 5% y europeo 30% de incremento al valor actual
        
        resultado = calcularMarca(marca) * resultado;
        
        // el plan del coche, el basico + 20% y completo 50%
        let incrementoPlan = obtenerPlan(plan);
        
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        console.log('La resultado de año es ' + resultado);

        // crear objeto para el resumen
        const datosCoche = {
            marca,
            plan,
            year
        }
        this.setState({
            resultado: resultado,
            datos: datosCoche
        })

    }
    render() {
        return ( 
            <div className = "contenedor" >
                <Header titulo ="Cotizador de seguros"></Header>
                <div className="contenedor-formulario">
                    <Formulario 
                        cotizarSeguro={this.cotizarSeguro}
                    />
                    <Resumen 
                        datos = {this.state.datos}
                        resultado ={this.state.resultado}
                    />
                </div>
            </div>
        );
    }
}

export default App;