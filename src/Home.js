import React, { Component } from 'react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {message: 'Bienvenido al sistema virtual e-unitec'};
    }

  render() {
    return (
        <h1>{this.state.message}</h1>
    );
  }
}

export default Home;