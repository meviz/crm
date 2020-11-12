import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

class RightMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        return <Nav>
            <Nav.Item className="">
                <Dropdown>
                    <Dropdown.Toggle size="sm" variant="outline-secondary" id="dropdown-basic">
                        Add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
            <Nav.Item className="notification">
                <Nav.Link>
                    <i className="fa fa-bell-o"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
                <Dropdown>
                    <Dropdown.Toggle className="text-secondary" size="sm" variant="default" id="dropdown-basic">
                        Esther Howard
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
        </Nav>
    }
}

export default RightMenu;