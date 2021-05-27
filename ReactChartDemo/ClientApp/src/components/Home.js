import React, { Component } from 'react';
import { PieChart } from './PieChart.js';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <PieChart />
      </div>
    );
  }
}
