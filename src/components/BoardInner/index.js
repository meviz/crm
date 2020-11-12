import React from 'react';
import { Button,Card } from 'react-bootstrap';

import BoardActionList from '../BoardActionCard';

class BoardInner extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return <>
            <Card className="h-100 mr-2 board-inner position-relative">
                <Card.Body className="h-100">
                    <div className="board-inner-head">
                        <div className="board-head-text font-weight-bold">
                            <i className="fa fa-table"></i>
                            Planning
                        </div>
                        <div className="board-head-btn-list">
                            <Button size="sm" variant="outline-primary"><i className="fa fa-plus"></i></Button>
                            <Button size="sm" variant="outline-primary"><i className="fa fa-ellipsis-v"></i></Button>
                        </div>
                    </div>
                    <div className="board-head-info mt-4 border-bottom mb-2">
                        <div className="bhi-text mb-2">Total: 35.000 $</div>
                        <div className="bhi-text mb-2">Estimated: 3.500 $</div>
                    </div>
                    
                    <div className="board-action-list">
                        {this.props.children}
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    }
}

export default BoardInner;