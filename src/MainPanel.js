import React, { Component } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'
import Defaults from './Defaults.js'

export default class MainPanel extends Component {
  constructor() {
    super(); 
    this.state = Defaults;
    this.population = 327000000.0;
  }

  updateDaysInfected = (value) => {
    this.setState({ daysInfected: value });
  };

  updateInfectionRate = (value) => {
    this.setState({ infectionRate: value });
  };

  updateFractionCritical = (value) => {
    this.setState({ fractionCritical: value });
  };

  updateFractionDeadIcu = (value) => {
    this.setState({ fractionDeadIcu: value });
  };

  updateFractionDeadHospital = (value) => {
    this.setState({ fractionDeadHospital: value });
  };

  updateFractionDeadHome = (value) => {
    this.setState({ fractionDeadHome: value });
  };

  render() {
    const { daysInfected, infectionRate, fractionCritical, fractionDeadIcu, fractionDeadHospital, fractionDeadHome } = this.state;

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
              population={this.population}
              daysInfected={daysInfected}
              infectionRate={infectionRate}
              fractionCritical={fractionCritical}
              fractionDeadIcu={fractionDeadIcu}
              fractionDeadHospital={fractionDeadHospital}
              fractionDeadHome={fractionDeadHome}
            />
          </Figure>
          <Figure>
            <Controls 
              updateDaysInfected={this.updateDaysInfected}
              updateInfectionRate={this.updateInfectionRate}
              updateFractionCritical={this.updateFractionCritical}
              updateFractionDeadIcu={this.updateFractionDeadIcu}
              updateFractionDeadHospital={this.updateFractionDeadHospital}
              updateFractionDeadHome={this.updateFractionDeadHome}
            />
          </Figure>
        </Card.Body>
      </Card>
    );
  }
}
