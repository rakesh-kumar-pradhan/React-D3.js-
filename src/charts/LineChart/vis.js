import * as d3 from 'd3';
import _ from 'lodash';

const draw = (props) => {
    let data = [];
    if (props.data !== null) {
        data = _.cloneDeep(props.data.activities);
    }
    d3.select('.vis-linechart > *').remove();
    let margin = { top: 20, right: 5, bottom: 30, left: 5 }
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select(".vis-linechart")
        .append("svg")
        .attr("width", "100%")  // Set the width to 100%
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
      
        d.count = +d.count;
    });
    
    // Add X axis --> it is a date format
    let x = d3.scaleTime()
        .domain(d3.extent(data, function (d) { return d.date; }))
        .range([1, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSize(0)
        .tickFormat(d3.timeFormat("%d"))

        )

       // Use %d to display only the day
        .select(".domain")
    .remove()
  
        
        
    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.count; })])
        .range([height, 0]);
    svg.append("g")
        // .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#55bc55")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.count) })
            .curve(d3.curveCatmullRom.alpha(0.5))
        )


}

export default draw;