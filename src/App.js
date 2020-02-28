import React from 'react';
    
import { Button, ButtonToolbar, Breadcrumb, Jumbotron} from 'react-bootstrap';
import './App.css';
import SidebarMenu from './templates/SidebarMenu'
import Profile from './profile/Profile'

function App() {
  return (
    <div className="container-full">
    <SidebarMenu></SidebarMenu>
    <div className="container">
    <Profile></Profile>
    </div>
    </div>


  );
}

export default App;
