import React, { PureComponent } from 'react';
import { Table } from 'react-bootstrap'

export default class Results extends PureComponent {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  
 render() {
   const { total, infections, critical, deaths } = this.props;

    return (
      <Table striped bordered hover size="sm">
        <tbody>
          <tr align="left">
            <td><strong>Total Population</strong></td>
            <td>{this.numberWithCommas(total)}</td>
          </tr>


          <tr align="left">
            <td><strong>Total Infections</strong></td>
            <td>{this.numberWithCommas(infections)} ({(100 * infections / total).toFixed(2)}%)</td>
          </tr>

          <tr align="left">
            <td><strong>Critical Cases</strong></td>
            <td>{this.numberWithCommas(critical)} ({(100 * critical / total).toFixed(2)}%)</td>
          </tr>

          <tr align="left">
            <td><strong>Deaths</strong></td>
            <td>{this.numberWithCommas(deaths)} ({(100 * deaths / total).toFixed(2)}%)</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
