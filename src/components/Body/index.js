import React from 'react';
import { Container } from 'react-bootstrap';

import SectionHead from '../SectionHead';
import InfoList from '../InfoList';
import Board from '../Board';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return <>
            <Container className="section-body" fluid>
                <SectionHead/>
                <InfoList/>
                <Board/>
            </Container>
        </>
    }
}

export default Header;
