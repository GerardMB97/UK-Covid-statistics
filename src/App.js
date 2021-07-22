import React from 'react';
import './App.css';
import getData from './hooks/getData';

function App() {
  const { data, error, loading } = getData();
  return (
    <div className="App">
      {error && <h1>There was an error</h1>}
      {loading ? <h1>Loading</h1> : (
        <h1>
          I loaded
          {' '}
          {data[0].newCases}
        </h1>
      )}
    </div>
  );
}

export default App;
