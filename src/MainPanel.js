import React, { Component } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'

export default class MainPanel extends Component {
  constructor() {
    super(); 
    this.state = {
      lengthOfStay: 10
    };
  }

  updateLengthOfStay = (newLengthOfStay) => {
    this.setState({ lengthOfStay: newLengthOfStay })
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
          />
          <div>{lengthOfStay}</div>
        </Card.Body>
      </Card>
    );
  }
}
