const formatUserInput = (graphPathText) => {
  const removedSpacesPath = graphPathText.replace(/ /g, '');
  return removedSpacesPath.split(/[,\n]+/);
};

const createAdjacencyList = (pathsArray) => {
  const adjacencyList = {};

  pathsArray.forEach((path) => {
    const nodesArray = path.split('-');

    // Handle First Node useCase
    // The reason is that we need a starting point to connect the edges
    if (!adjacencyList[nodesArray[0]]) {
      adjacencyList[nodesArray[0]] = [];
    }

    // Loop through the rest of the Nodes
    for (let i = 1; i < nodesArray.length; i++) {
      const currentNode = nodesArray[i];
      const previousNode = nodesArray[i - 1];

      if (currentNode === previousNode) continue;

      if (!adjacencyList[currentNode]) {
        adjacencyList[currentNode] = [previousNode];
        adjacencyList[previousNode].push(currentNode);
      } else {
        adjacencyList[currentNode].push(previousNode);
        adjacencyList[previousNode].push(currentNode);
      }
    }
  });

  return adjacencyList;
};

const getGraphStatus = (graph, source) => {
  const color = {};
  color[source] = 0; // red color

  console.log(source);

  const isColorable = depthFirstSearch(graph, source, color);

  if (Object.keys(color).length !== Object.keys(graph).length) {
    return 'Is not a connected Graph';
  }

  if (!isColorable) {
    return 'Is a connected graph, but not red blue colorable.';
  }

  return 'Is a connected and red-blue colorable graph';
};

const depthFirstSearch = (graph, source, color) => {
  for (let neighbor of graph[source]) {
    if (color[neighbor] === color[source]) return false;

    if (color[neighbor] === undefined) {
      color[neighbor] = 1 - color[source];
      depthFirstSearch(graph, neighbor, color);
    }
  }

  return true;
};

export default {
  formatUserInput,
  createAdjacencyList,
  getGraphStatus,
};
