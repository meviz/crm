import React from 'react';
import LogoImg from '../../assets/images/logo.png';
import { Navbar } from 'react-bootstrap';

class Logo extends React.Component {
    
    render(){
        return <Navbar.Brand href="#home" className="menu-bar-logo">
            <img src={LogoImg}/>
        </Navbar.Brand>
    }
}

export default Logo;
