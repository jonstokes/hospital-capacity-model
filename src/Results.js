import React, { PureComponent } from 'react';
import { Table } from 'react-bootstrap'

export default class Results extends PureComponent {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  
 render() {
   const { infections, hospital, icu, deaths } = this.props

    return (
      <Table striped bordered hover size="sm">
        <tbody>
        <tr align="left">
            <td><strong>Infections</strong></td>
            <td>{this.numberWithCommas(infections)}</td>
          </tr>

          <tr align="left">
            <td><strong>Hospitalizations</strong></td>
            <td>{this.numberWithCommas(hospital)}</td>
          </tr>

          <tr align="left">
            <td><strong>ICU</strong></td>
            <td>{this.numberWithCommas(icu)}</td>
          </tr>

          <tr align="left">
            <td><strong>Deaths</strong></td>
            <td>{this.numberWithCommas(deaths)}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
