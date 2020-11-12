import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav } from 'react-bootstrap';

class Menu extends React.Component {

    
    render(){
        return <Nav className="menu-bar-list">
                {this.props.items.map((item,index)=>
                    <Nav.Item key={index} className="">
                        <Nav.Link href="/home">
                            <i className={item.icon}></i>
                            <span>{item.name}</span>
                        </Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
    }
}

export default Menu;
