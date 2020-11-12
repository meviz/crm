import React from 'react';
import { Button,Card } from 'react-bootstrap';

class BoardInner extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return <>
            <Card className="mb-2">
                <Card.Body>
                    <div className="font-weight-bold mb-2">Acme Corporation</div>
                    <div>Cameron Williamson</div>
                </Card.Body>
            </Card>
        </>
    }
}

export default BoardInner;