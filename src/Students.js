import React, { Component } from 'react';
import './App.css';

class Students extends Component {
    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
        this.state = {
            studentsList: [
                {nombre: 'Julio', apellido: 'Carias', numeroCuenta: '21521004'},
                {nombre: 'Boris', apellido: 'Garcia', numeroCuenta: '21528994'},
                {nombre: 'Carlos', apellido: 'Villanueva', numeroCuenta: '21456783'}
            ]
        };
    }

  listItem(item){
        return(
            <li key={item.name}> {item.numeroCuenta} {item.nombre} {item.apellido} </li>
        );
        
  }

  render() {
    return (
        <ul>
        {this.state.studentsList.map(this.listItem)}
        </ul>
    );
  }
};

export default Students;