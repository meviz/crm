import React from 'react';
import { Dropdown, Navbar } from 'react-bootstrap';

import Logo from '../Logo';
import Menu from '../Menu';
import RightMenu from '../RightMenu';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuItems:[
                {
                    name:"Home",
                    icon:"fa fa-home",
                },{
                    name:"Customer",
                    icon:"fa fa-user",
                },
                {
                    name:"Product",
                    icon:"fa fa-cube",
                },
                {
                    name:"Board",
                    icon:"fa fa-tv",
                },
                {
                    name:"Calendar",
                    icon:"fa fa-calendar",
                },{
                    name:"Category",
                    icon:"fa fa-cubes",
                },{
                    name:"File",
                    icon:"fa fa-folder-o",
                },{
                    name:"Lead",
                    icon:"fa fa-cube",
                },{
                    name:"More",
                    icon:"fa fa-ellipsis-h"
                }
            ]
        }
    }
    
    render(){
        return <Navbar className="menu-bar">
                    <Logo/>
                    <Menu items={this.state.menuItems}/>
                    <RightMenu/>
                </Navbar>
    }
}

export default Header;
