import React, { useState } from 'react';
import './Dashboard.css';
import MainContainer from '../components/Dashboard/MainContainer';
import Menu from '../components/Dashboard/Menu.js';
import ParticlesComponent from '../components/Particles.js';

function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className='App1'>
        <Menu setActiveTab={setActiveTab} />
        <MainContainer activeTab={activeTab} />
        <ParticlesComponent />
    </div>
  )
}

export default Dashboard;