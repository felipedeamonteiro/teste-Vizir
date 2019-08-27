import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import TabelaCola from './TabelaCola';

import Header from './Header';


class App extends Component {
  state = {
    dados: [
      {
        origem: "",
        destino: "",
        tempo: "",
        plano: "",
        comfm: "",
        semfm: ""
      }
    ],
  }

  clearTable = () => {
    this.setState({
      dados: [
        {
          origem: "",
          destino: "",
          tempo: "",
          plano: "",
          comfm: "",
          semfm: ""
        }
      ]
    });
  }

  escutadorDeSubmit = dado => {
    this.setState({ dados: [...this.state.dados, dado] });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container tabela1">
          <Tabela  dados={this.state.dados} clearTable={this.clearTable} />
        </div>
        
        <div className="container">
          <button className="waves-effect waves-light btn indigo lighten-2 limpa-tabela" onClick={ () => this.clearTable() } >Limpar Tabela</button>
        </div>
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit}  />
        <div className="container preco">
          <h4>Tabela de Preços</h4>
          <TabelaCola />
        </div>
      </Fragment>
    );
  }

}

export default App;
