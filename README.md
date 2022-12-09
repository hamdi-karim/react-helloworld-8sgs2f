# Red-blue colorable graphs

    Technology : using React starter code on StackBlitz

# StackBlitz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-helloworld-8sgs2f)

# helper_functions .js

### formatUserInput ( userInput )

    Removes whitespaces and splits text based on delimiters comma or newLine

### createAdjacencyList ( pathsArray )

    Returns a Data Structure representation of the graph

    Exemple :
    - Input : a,b,c
    - Output :
      [
         a : ["b"],
         b : ["a", "c"],
         c : ["b"]
      ]

### getGraphStatus ( graph, source )

    Returns a status message whether graph is Connected and Colorable or NOT
    - 3 Possible States ( Not connected, Connected but not Colorable, Connected AND colorable )

### depthFirstSearch (graph, source, color)

    A recursive function that performs DFS algorithm and returns a Boolean indicating if our graph is colorable

    - source INPUT  is a random Node that we consider as our Root Node
    - color INPUT is an object that serves for knowing both if our graph is connected and if it is red-blue colorable
