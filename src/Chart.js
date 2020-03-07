import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import jstat from 'jstat';

export default class Chart extends PureComponent {
  computeNormalForDay(day, total) {
    const { lengthOfOutbreak } = this.props;
    const midpoint = lengthOfOutbreak / 2.0;
    const normalizedBedCount = jstat.normal.pdf(day, midpoint, 5);

    return(normalizedBedCount * total)
  }

  generateData() {
    const { hospital, icu, deaths, lengthOfOutbreak } = this.props;
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
    const reducer = (accumulator, currentValue) => accumulator + currentValue.hospital;
    const totalHospital = bedData.reduce(reducer, 0);
    console.log(totalHospital)

    return (
      <ResponsiveContainer width={700} height={500}>
        <AreaChart
          width={500}
          height={400}
          data={bedData}
          margin={{
            top: 10, right: 30, left: 30, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name"
            allowDecimals={false}
          />
          <YAxis 
            allowDecimals={false}
          />
          <Tooltip />
          <ReferenceLine y={90000} label="ICU Beds" stroke="red" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="icu" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="hospital" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
