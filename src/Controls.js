import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import Defaults from './Defaults.js'

export default class Controls extends Component {
  constructor() {
    /* 1. Initialize Ref */
    super(); 
    this.lengthOfOutbreak = React.createRef();
    this.infectionRate = React.createRef();
    this.hospitalRate = React.createRef();
    this.icuRate = React.createRef();
    this.fatalityRate = React.createRef();
 }

 handleLengthOfOutbreakChange() {
    const value = Number(this.lengthOfOutbreak.current.value)
    this.props.updateLengthOfOutbreak(value)
 }

 handleInfectionRateChange() {
  const value = Number(this.infectionRate.current.value)
  this.props.updateInfectionRate(value)
}

 handleHospitalRateChange() {
  const value = Number(this.hospitalRate.current.value)
  this.props.updateHospitalRate(value)
}

handleIcuRateChange() {
  const value = Number(this.icuRate.current.value)
  this.props.updateIcuRate(value)
}

handleFatalityRateChange() {
  const value = Number(this.fatalityRate.current.value)
  this.props.updateFatalityRate(value)
}

 render() {   
    return (
      <div style={{ width: '30rem' }}>
        <InputGroup className="mb-3">
          <FormControl
            ref={this.lengthOfOutbreak}
            defaultValue={Defaults.lengthOfOutbreak}
            onChange={() => this.handleLengthOfOutbreakChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Length of Outbreak</InputGroup.Text>
          </InputGroup.Append>

        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.infectionRate}
            defaultValue={Defaults.infectionRate}
            onChange={() => this.handleInfectionRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Infection rate</InputGroup.Text>
          </InputGroup.Append>

        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.hospitalRate}
            defaultValue={Defaults.hospitalRate}
            onChange={() => this.handleHospitalRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Hospitalization rate</InputGroup.Text>
          </InputGroup.Append>

        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.icuRate}
            defaultValue={Defaults.icuRate}
            onChange={() => this.handleIcuRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">ICU rate</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fatalityRate}
            defaultValue={Defaults.fatalityRate}
            onChange={() => this.handleFatalityRateChange()}  
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Case fatality rate</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
