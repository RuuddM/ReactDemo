import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export class PieChart extends Component {

  render() {
    return (
      <div>
            <Pie style={{ height: '400px', width: '900px', 'max-width': '90%' }}
                data={{
                    labels: ['Bijlmer-Centrum', 'Bijlmer-Centrum', 'Centrum-Oost', 'Centrum-West', 'Noord-Oost', 'Noord-West'],
                    datasets: [
                        {
                            label: '# listings per buurt',
                            data: [100, 98, 1610, 2170, 218, 262],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}

            />
      </div>
    );
  }
}
