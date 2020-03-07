import React, { Component } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'
import Results from './Results.js'
import Defaults from './Defaults.js'

export default class MainPanel extends Component {
  constructor() {
    super(); 
    this.state = Defaults;

    this.population = 327000000.0
  }

  updateUsedBedsHospital = (value) => {
    this.setState({ usedBedsHospital: value })
  }

  updateUsedBedsIcu = (value) => {
    this.setState({ usedBedsIcu: value })
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

  updateHospitalStayLength = (value) => {
    this.setState({ hospitalStayLength: value })
  }

  updateIcuStayLength = (value) => {
    this.setState({ icuStayLength: value })
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
    const { usedBedsHospital, usedBedsIcu, lengthOfOutbreak, hospitalStayLength, icuStayLength } = this.state;
    const hospitalRate = this.state.hospitalRate / 100
    const icuRate = this.state.icuRate / 100

    return (
      <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title>Hospital Capacity</Card.Title>
          <Card.Text>
            Visualizing hospital overcapacity problems in the COVID-19 epidemic.
          </Card.Text>
          <Card.Link href="https://theprepared.com/">The Prepared</Card.Link>
          <br />
          <Figure
            width="100%"
            height="100%"
          >
            <Chart
              usedBedsHospital={usedBedsHospital}
              usedBedsIcu={usedBedsIcu}
              lengthOfOutbreak={lengthOfOutbreak}
              infections={this.infections()}
              hospitalRate={hospitalRate}
              icuRate={icuRate}
              hospitalStayLength={hospitalStayLength}
              icuStayLength={icuStayLength}
              deaths={this.deaths()}
            />
          </Figure>
          <Figure>
            <div style={{ width: '30rem', paddingTop: '1rem' }}>
              <Results
                infections={this.infections()}
                hospital={this.hospital()}
                icu={this.icu()}
                deaths={this.deaths()}
              />
            </div>
          </Figure>
          <Figure>
            <Controls 
              updateUsedBedsHospital={this.updateUsedBedsHospital}
              updateUsedBedsIcu={this.updateUsedBedsIcu}
              updateLengthOfOutbreak={this.updateLengthOfOutbreak}
              updateInfectionRate={this.updateInfectionRate}
              updateHospitalRate={this.updateHospitalRate}
              updateIcuRate={this.updateIcuRate}
              updateFatalityRate={this.updateFatalityRate}
              updateIcuStayLength={this.updateIcuStayLength}
              updateHospitalStayLength={this.updateHospitalStayLength}
            />
          </Figure>
        </Card.Body>
      </Card>
    );
  }
}
