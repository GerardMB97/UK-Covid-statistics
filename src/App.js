import React from 'react';
import './App.css';
import getData from './hooks/getData';
import LineGraph from './components/lineGraph';

function App() {
  const { data, error, loading } = getData();
  return (
    <div className="App">
      {error && <h1>There was an error</h1>}
      {loading ? <h1>Loading</h1> : (
        <div><LineGraph data={data} /></div>
      )}
    </div>
  );
}

export default App;
