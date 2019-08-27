import React, { Component } from 'react';

const TableHead = () => {
  return(
    <thead>
      <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>R$/min.</th>
      </tr>
    </thead>
  );
}

const TableBody = () => {
  return(
    <tbody>
      <tr>
        <td>011</td>
        <td>016</td>
        <td>1.90</td>
      </tr>
      <tr>
        <td>016</td>
        <td>011</td>
        <td>2.90</td>
      </tr>
      <tr>
        <td>011</td>
        <td>017</td>
        <td>1.70</td>
      </tr>
      <tr>
        <td>017</td>
        <td>011</td>
        <td>2.70</td>
      </tr>
      <tr>
        <td>011</td>
        <td>018</td>
        <td>0.90</td>
      </tr>
      <tr>
        <td>018</td>
        <td>011</td>
        <td>1.90</td>
      </tr>
    </tbody>
  );
}

class TabelaCola extends Component{
  render(){
    return(
      <table className="centered highlight">
        <TableHead />
        <TableBody />
      </table>
    );
  }
}
export default TabelaCola;