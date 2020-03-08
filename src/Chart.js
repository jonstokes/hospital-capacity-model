import React, { PureComponent, Fragment } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Line, LineChart
} from 'recharts';

import Results from './Results.js'

export default class Chart extends PureComponent {

  initialize() {
    const { population } = this.props;
    this.totalInfections = 1;
    this.totalCritical = 0;
    this.totalDeaths = 0;
    this.state = {
      day: 1,
      S: population - 1,
      I: 1,
      R: 0,
      D: 0,
    };
    this.data = [
      {
        day: 1,
        infections: 1,
        critical: 0,
        deaths: 0,
      }
    ];
  }

  computeNextDayResults() {
    const { day, S, I, R, D } = this.state;
    const icuBeds = 90000;
    const hospitalBeds = 900000 - icuBeds;
    const { population, daysInfected, infectionRate, fractionCritical, fractionDeadIcu, fractionDeadHospital, fractionDeadHome } = this.props;
    const daysBetweenContacts = daysInfected / infectionRate;


    // Cases going from susceptible --> infected
    const newInfections = (I * S) / (population * daysBetweenContacts);

    // Cases going from infected --> recovered
    const recoveredInfections = (I / daysInfected) * (1 - fractionCritical);

    // For critical cases, we split into ICU, hospital, and home care, in descending order
    const C = I * fractionCritical;
    const CIcu = Math.min(C, icuBeds);
    const CHospital = C > icuBeds ? Math.min(C - icuBeds, hospitalBeds) : 0;
    const CHome = C > (icuBeds + hospitalBeds) ? C - (icuBeds + hospitalBeds) : 0;

    // Cases going from critical --> recovered
    const recoveredCritical =
      ((CIcu / daysInfected) * (1 - fractionDeadIcu)) +
      ((CHospital / daysInfected) * (1 - fractionDeadHospital)) +
      ((CHome / daysInfected) * (1 - fractionDeadHome));

    // Cases going from critical --> dead
    const deadCritical =
      ((CIcu / daysInfected) * fractionDeadIcu) +
      ((CHospital / daysInfected) * fractionDeadHospital) +
      ((CHome / daysInfected) * fractionDeadHome);

    // Update total results
    this.totalInfections = this.totalInfections + newInfections;
    this.totalCritical = this.totalCritical + newInfections * fractionCritical;
    this.totalDeaths = this.totalDeaths + deadCritical;

    const newS = S - newInfections;
    const newI = I + newInfections - recoveredInfections - recoveredCritical - deadCritical;
    const newR = R + recoveredInfections + recoveredCritical;
    const newD = D + deadCritical;

    // Update results over time
    this.data.push({
      day: day + 1,
      infections: Math.round(newI),
      critical: Math.round(newI * fractionCritical),
      deaths: Math.round(newD),
    });

    // Update final state
    this.state = {
      day: day + 1,
      S: newS,
      I: newI,
      R: newR,
      D: newD,
    }
  }

  generateData() {
    this.initialize();
    while (((this.state["I"] >= 20) | (this.state["day"] <= 60)) && (this.state["day"] <= (365 * 2))) {
      this.computeNextDayResults();
    }
    console.log(this.state);
  }

  render() {
    this.generateData();

    return (
      <Fragment>
      <ResponsiveContainer width={800} height={500}>
        <AreaChart
          width={600}
          height={400}
          data={this.data}
          margin={{
            top: 10, right: 20, left: 30, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            allowDecimals={false}
            //label="Days Since First Case"
          />
          <YAxis
            //scale="log"
            type="number"
            domain={[0, 150000]}
            allowDecimals={false}
          />
          <Tooltip />
          <ReferenceLine y={900000} label="All Hospital Beds Available" stroke="red" strokeDasharray="3 3" />
          <ReferenceLine y={90000} label="ICU Beds Available" stroke="red" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="infections" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="critical" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="deaths" stackId="3" stroke="#e0795d" fill="#e0795d" />
        </AreaChart>
      </ResponsiveContainer>
      <Results
        total={Math.round(this.props["population"])}
        infections={Math.round(this.totalInfections)}
        critical={Math.round(this.totalCritical)}
        deaths={Math.round(this.totalDeaths)}
      />
      </Fragment>
    );
  }
}
