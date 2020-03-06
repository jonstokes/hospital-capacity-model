import React, { Component } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'
import Results from './Results.js'

export default class MainPanel extends Component {
  constructor() {
    super(); 
    this.state = {
      lengthOfOutbreak: 365,
      infectionRate: 10,
      hospitalRate: 20,
      icuRate: 5,
      fatalityRate: 2.3
    };

    this.population = 327000000.0
  }

  updateLengthOfOutbreak = (value) => {
    this.setState({ lengthOfOutbreak: value })
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

  infections() {
    const infectionRate = this.state.infectionRate / 100
    return this.population * infectionRate
  }

  hospital() {
    const hospitalRate = this.state.hospitalRate / 100

    return this.infections() * hospitalRate
  }

  icu() {
    const icuRate = this.state.icuRate / 100

    return this.infections() * icuRate
  }

  deaths() {
    const fatalityRate = this.state.fatalityRate / 100

    return this.infections() * fatalityRate
  }

  render() {
    const { lengthOfOutbreak } = this.state;

    return (
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Hospital Capacity</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Figure>
            <Chart
              lengthOfOutbreak={Number(lengthOfOutbreak)}
              infections={this.infections()}
              hospital={this.hospital()}
              icu={this.hospital()}
              deaths={this.deaths()}
            />
          </Figure>
          <Controls 
            updateLengthOfOutbreak={this.updateLengthOfOutbreak}
            updateInfectionRate={this.updateInfectionRate}
            updateHospitalRate={this.updateHospitalRate}
            updateIcuRate={this.updateIcuRate}
            updateFatalityRate={this.updateFatalityRate}
          />
          <Figure>
            <div style={{ width: '30rem', paddingTop: '2rem' }}>
              <Results
                infections={this.infections()}
                hospital={this.hospital()}
                icu={this.icu()}
                deaths={this.deaths()}
              />
            </div>
          </Figure>
        </Card.Body>
      </Card>
    );
  }
}
