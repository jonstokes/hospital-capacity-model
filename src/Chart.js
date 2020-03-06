import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

function stdNormalDistribution (x) {
  return Math.pow(Math.E,-Math.pow(x,2)/2)/Math.sqrt(2*Math.PI);
}

export default class Example extends PureComponent {
  lengthOfOutbreak() {
    const { lengthOfOutbreak } = this.props
    if(typeof(lengthOfOutbreak) == 'string') {
      return Number(lengthOfOutbreak)
    } else {
      return lengthOfOutbreak
    }
  }

  computeNormalForDay(day, totalBedsNeeded) {
    const lengthOfOutbreak = this.lengthOfOutbreak();
    const midpoint = lengthOfOutbreak / 2.0;
    const scalingFactor = 8.0 / lengthOfOutbreak;
    const normalizedBedCount = stdNormalDistribution((day - midpoint) * scalingFactor);

    return(normalizedBedCount * totalBedsNeeded)
  }

  generateData() {
    const { hospital, icu, deaths } = this.props;
    const lengthOfOutbreak = this.lengthOfOutbreak();
    const dayRange = [...Array(lengthOfOutbreak).keys()];
    const bedData = dayRange.map((day) => {
      return({ 
        name: day,
        hospital: this.computeNormalForDay(day, hospital),
        icu: this.computeNormalForDay(day, icu),
        deaths: this.computeNormalForDay(day, deaths)
      })
    });

    return bedData
  }

  render() {
    const bedData = this.generateData();

    return (
      <ResponsiveContainer width={600} height={500}>
        <AreaChart
          width={500}
          height={400}
          data={bedData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={937000} label="Beds" stroke="red" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="deaths" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="icu" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="hospital" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
