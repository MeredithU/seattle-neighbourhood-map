import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.jsx';
import SeattleMap from './SeattleMap.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title title='Seattle Neighbourhood Map'/>
        <SeattleMap />
      </div>
    );
  }
};

export default App;