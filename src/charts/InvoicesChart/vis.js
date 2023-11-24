import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DoubleHistogram = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
      const svg = d3.select(svgRef.current);
  
      // Define dimensions and margins
      const width = 600;
      const height = 235;
      const margin = { top: 10, right: 5, bottom: 25, left: 0 };
  
      const keys = Object.keys(data[0]).filter((key) => key !== "month");
  
      const stack = d3.stack().keys(keys);
  
      const stackedData = stack(data);
  
      console.log(d3.max(stackedData[stackedData.length - 1], (d) => d[0]));
      const colorScale = d3.scaleOrdinal().range(["#55bc55", "#19e190"]);
      // Define scales for both y-axes
      const yScale1 = d3
        .scaleLinear()
        .domain([0, d3.max(stackedData[stackedData.length - 1], (d) => d[1])])
        .nice()
        .range([height - margin.bottom, margin.top]);
      const yScale2 = d3
        .scaleLinear()
        .domain([0, d3.max(stackedData[stackedData.length - 1], (d) => d[0])])
        .nice()
        .range([height - margin.bottom, margin.top]);
  
      // Define x-axis scale
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.month))
        .range([0, width - margin.right])
        .padding(0.8);
  
      // Create axes
      const xAxis = d3.axisBottom(xScale).tickSize(0);
      const yAxis1 = d3.axisLeft(yScale1);
      const yAxis2 = d3.axisRight(yScale2);
  
      // Append x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.top})`)
        .call(xAxis)
        .select(".domain")
        .remove();
  
      // Create bars for the values 0 to 100 (behind)
      svg
        .selectAll(".bar-group1")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "bar-group1")
        .append("rect")
        .attr("x", (d) => xScale(d.month))
        .attr("y", (d) => yScale1(d.cashOut))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - margin.bottom - yScale1(d.cashOut))
        .style("fill", "#19e190")
        .attr("rx", 8) // Set the x-radius for top rounded corners
        .attr("ry", 8);
  
      // Create bars for the values 0.0 to 0.5 (on top)
      svg
        .selectAll(".bar-group2")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "bar-group2")
        .append("rect")
        .attr("x", (d) => xScale(d.month))
        .attr("y", (d) => yScale2(d.cashIn))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - margin.bottom - yScale2(d.cashIn))
        .attr("fill", (d) => colorScale(d.key))
        .attr("rx", 8) // Set the x-radius for top rounded corners
        .attr("ry", 8); // Set the x-radius for top rounded corners
    }, [data]);
  
    return (
      <div className="double-histogram">
        <svg ref={svgRef} width="100%" height="250"></svg>
      </div>
    )
  }

export default DoubleHistogram;