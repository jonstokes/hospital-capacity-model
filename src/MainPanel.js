import React, { Component } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'

export default class MainPanel extends Component {
  constructor() {
    super(); 
    this.state = {
      lengthOfStay: 10,
      infectionRate: 10,
      hospitalRate: 20,
      icuRate: 5,
      fatalityRate: 2.3
    };
  }

  updateLengthOfStay = (value) => {
    this.setState({ lengthOfStay: value })
  }

  updateInfectionRate = (value) => {
    this.setState({ infectionRate: value })
  }

  updateHospitalRate = (value) => {
    this.setState({ hospitalRate: value })
  }

  updateIcuRate = (value) => {
    this.setState({ icuRate: value })
  }

  updateFatalityRate = (value) => {
    this.setState({ fatalityRate: value })
  }

  render() {
    const { lengthOfStay } = this.state;

    return (
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Hospital Capacity</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Figure>
            <Chart />
          </Figure>
          <Controls 
            updateLengthOfStay={this.updateLengthOfStay}
            updateInfectionRate={this.updateInfectionRate}
            updateHospitalRate={this.updateHospitalRate}
            updateIcuRate={this.updateIcuRate}
            updateFatalityRate={this.updateFatalityRate}
          />
          <div>{lengthOfStay}</div>
        </Card.Body>
      </Card>
    );
  }
}
