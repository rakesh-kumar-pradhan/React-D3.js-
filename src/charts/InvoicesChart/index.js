import React, { Component } from 'react';
import DoubleHistogram from './vis';
import './style.css';

const InvoicesChart = ({data}) => {
    // const data = [
    //   { category: 'A', value1: 10, value2: 20 },
    //   { category: 'B', value1: 20, value2: 25 },
    //   { category: 'C', value1: 15, value2: 30 }
    //   // Add more data points as needed
    // ];

    return (
      <div className="app-container">
        <DoubleHistogram data={data} />
      </div>
    )
  }
  
  export default InvoicesChart;