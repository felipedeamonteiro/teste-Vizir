import React, { Component } from 'react';

const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Tempo</th>
            <th>Plano FaleMais</th>
            <th>Com FaleMais</th>
            <th>Sem FaleMais</th>
          </tr>
        </thead>
    );
}

const TableBody = props =>{
    
    const linhas = props.dados.map((linha, index)=>{
       return( 
       <tr key={index}>
            <td>{linha.origem}</td>
            <td>{linha.destino}</td>
            <td>{linha.tempo}</td>
            <td>{linha.plano}</td>
            <td>{linha.comfm}</td>
            <td>{linha.semfm}</td>
        </tr>
       );
    });

    return(
      <tbody className="tabela1">
        {linhas}
      </tbody>
    );
}


class Tabela extends Component{
    
  render(){
    const { dados, clearTable } = this.props;
        
    return(
      <div className="container"> 
        <table className="centered highlight">
          <TableHead />
          <TableBody dados={dados} clearTable={clearTable}/>
        </table>
      </div>
      
    );
  }
}
export default Tabela;