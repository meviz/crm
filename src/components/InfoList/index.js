import React from 'react';
import { Alert } from 'react-bootstrap';

class InfoList extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return <>
            <div className="info-list mt-3">
                <Alert variant="primary" className="text-primary d-inline-block">
                    <div>Total Item</div>
                    <div className="font-weight-bold">10</div>
                </Alert>
                <Alert variant="primary" className="text-primary d-inline-block">
                    <div>Total Item</div>
                    <div className="font-weight-bold">319.700 $</div>
                </Alert>
                <Alert variant="primary" className="text-primary d-inline-block">
                    <div>Total Item</div>
                    <div className="font-weight-bold">319.700 $</div>
                </Alert>
            </div>
        </>
    }
}

export default InfoList;