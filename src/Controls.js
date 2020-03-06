import React, { PureComponent } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

export default class Controls extends PureComponent {
  render() {
    return (
      <div style={{ paddingTop: '2rem' }}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Length of stay</InputGroup.Text>
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
            <InputGroup.Text id="inputGroup-sizing-default">Infection rate</InputGroup.Text>
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
