import React, {useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Jobs from './components/Jobs';
import './App.css';

function App() {
  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);
useEffect(() => {
  fetch('https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response => response.json())
  .then(json => setJobs([...json]));
}, []);
  return (
    <div className="App">
     <Header />
     <Jobs jobs={jobs}/>
    </div>
  );
}

export default App;
