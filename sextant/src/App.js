import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpAddress from './IpAddress';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IPV4 Address">
        <IpAddress type="ipv4" />
      </Exhibit>
      <Exhibit title="IPV6 Address">
        <IpAddress type="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
