import React from 'react';
import { Dropdown, Alert } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return <>
            <div className="section-head">
                <Dropdown>
                    <Dropdown.Toggle className="font-weight-bold" size="lg" variant="default" id="dropdown-basic">
                        Pipeline Board
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle size="sm" variant="outline-primary" id="dropdown-basic">
                        Add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    }
}

export default Header;