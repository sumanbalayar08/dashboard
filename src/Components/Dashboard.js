import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';
import '../App.css'


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data, endYearFilter, topicFilter, sectorFilter, regionFilter]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api'); // Replace with your API endpoint
      const fetchedData = response.data;
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = () => {
    let filteredData = [...data];

    if (endYearFilter) {
      filteredData = filteredData.filter(item => item.year <= endYearFilter);
    }

    if (topicFilter) {
      filteredData = filteredData.filter(item => item.topics.includes(topicFilter));
    }

    if (sectorFilter) {
      filteredData = filteredData.filter(item => item.sector === sectorFilter);
    }

    if (regionFilter) {
      filteredData = filteredData.filter(item => item.region === regionFilter);
    }

    setFilteredData(filteredData);
    createVisualization();
  };

  useEffect(() => {
    createVisualization();
  }, [filteredData]);

  const createVisualization = () => {
  // Remove existing SVG
  d3.select('#chart-container').select('svg').remove();

  // Define the dimensions of the chart
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create the SVG container
  const svg = d3
    .select('#chart-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Extract the unique years from the filteredData
  const years = filteredData.map(d => d.year);

  // Set the scales
  const xScale = d3
    .scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(years);

  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(filteredData, d => d.intensity)]);

  // Create the bars
  svg
    .selectAll('.bar')
    .data(filteredData)
    .enter()
    .append('rect')
    .attr('class', 'bar') // Add the 'bar' class here
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.intensity))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.intensity));

  // Add the x-axis
  svg
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  // Add the y-axis
  svg
    .append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(yScale));
};


  const handleEndYearChange = e => {
    setEndYearFilter(e.target.value);
  };

  const handleTopicChange = e => {
    setTopicFilter(e.target.value);
  };

  const handleSectorChange = e => {
    setSectorFilter(e.target.value);
  };

  const handleRegionChange = e => {
    setRegionFilter(e.target.value);
  };

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      <div className="filters">
        <label htmlFor="endYearFilter">End Year:</label>
        <input
          type="number"
          id="endYearFilter"
          value={endYearFilter}
          onChange={handleEndYearChange}
        />

        <label htmlFor="topicFilter">Topic:</label>
        <input
          type="text"
          id="topicFilter"
          value={topicFilter}
          onChange={handleTopicChange}
        />

        <label htmlFor="sectorFilter">Sector:</label>
        <input
          type="text"
          id="sectorFilter"
          value={sectorFilter}
          onChange={handleSectorChange}
        />

        <label htmlFor="regionFilter">Region:</label>
        <input
          type="text"
          id="regionFilter"
          value={regionFilter}
          onChange={handleRegionChange}
        />
      </div>
      <button onClick={createVisualization}>Show</button>
      <div id="chart-container"></div>
    </div>
  );
}

export default App;
