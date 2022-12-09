import React, { useState } from 'react';
import './style.css';

import helpers from './helpers';

export default function App() {
  const [graphPathText, setGraphPathText] = useState('');
  const [graphInfos, setGraphInfos] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const pathsArray = helpers.formatUserInput(graphPathText);

    const adjacencyList = helpers.createAdjacencyList([...pathsArray]);

    const source = Object.keys(adjacencyList)[0];

    const graphStatus = helpers.getGraphStatus({ ...adjacencyList }, source);

    // Handle display graph Infos on screen
    const newGraphInfos = {
      graphPath: graphPathText,
      graphStatus: graphStatus,
    };

    setGraphInfos([{ ...newGraphInfos }, ...graphInfos]);

    setGraphPathText('');
  };

  return (
    <div>
      <h1 style={{ color: '#9b02e8' }}>Hello Ardoqians!</h1>
      <form onSubmit={handleSubmit}>
        <h4>Graphs are added to the top:</h4>
        <textarea
          name="graphPath"
          type="text"
          value={graphPathText}
          onChange={(e) => setGraphPathText(e.target.value)}
        ></textarea>
        <br />
        <input
          type="submit"
          value="Check"
          style={{ background: '#9b02e8', color: '#fff' }}
        />
      </form>
      {graphInfos.map((graphInfo, idx) => {
        return (
          <p
            key={idx}
            style={{ border: '1px solid #9b02e8', paddingLeft: '1rem' }}
          >
            <h4>Graph : {graphInfo.graphPath}</h4>
            <h4>Status : {graphInfo.graphStatus}</h4>
          </p>
        );
      })}
    </div>
  );
}

//graphPath: "a - b- c"
//graphStatus: "Is a connected and red-blue colorable graph
