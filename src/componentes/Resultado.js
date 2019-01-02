import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Resultado extends Component {
    render(){
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca, año y tipo de seguro':'Su seguro es de ' + resultado + ' €';
        return(
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                        classNames="resultado" 
                        key={resultado}
                        timeout={{enter: 500, exit: 500}}
                    >
                    <span>{mensaje}</span>
                    </ CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}