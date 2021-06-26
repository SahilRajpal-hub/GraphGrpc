import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Chart from './components/Chart';

ReactDOM.render(
  <div>
    <Chart listen={'time'} sensorId="1" x-ticks="14"/>
    <Chart listen={'uplink'} sensorId="2" x-ticks="14" />
    <Chart listen={'downlink'} sensorId="3" x-ticks="14"/>
  </div>
  , document.getElementById('root'));
