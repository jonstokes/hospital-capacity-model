import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

export default class Controls extends Component {
  constructor() {
    /* 1. Initialize Ref */
    super(); 
    this.textInput = React.createRef(); 
 }

 handleChange() {
    /* 3. Get Ref Value here (or anywhere in the code!) */
    const value = this.textInput.current.value
    console.log(value)
 }

 render() {
    return (
      <div style={{ paddingTop: '2rem' }}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Length of stay</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.textInput}
            onChange={() => this.handleChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Infection rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Hospitalization rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">ICU rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Case fatality rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    );
  }
}
