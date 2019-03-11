import React, { Component } from 'react';
import './App.css';

class Classes extends Component {
    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
        this.state = {
            classesList: [
                {nombre: 'Experiencia de Usuario', codigoClase: 'CCC 307'},
                {nombre: 'Teoria de la Computacion', codigoClase: 'CCC 408'},
                {nombre: 'Teoria de Base de Datos II', codigoClase: 'CCC 304'}
            ]
        };
    }

  listItem(item){
        return(
            <li key={item.codigoClase}> {item.codigoClase} {item.nombre} </li>
        );
        
  }

  render() {
    return (
        <ul>
        {this.state.classesList.map(this.listItem)}
        </ul>
    );
  }
};

export default Classes;