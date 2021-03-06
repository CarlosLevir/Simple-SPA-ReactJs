import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const Experiense = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img" alt="company"></img>
                { props.name }
            </Col>
            <Col s={10} m={10}>
                <p><b>{ props.title } at <span className="indigo darken-4 white-text"></span>
                    { props.company }
                </b></p>
                <p>{ props.description }</p>
            </Col>
        </Row>
    </Card>
);

export default Experiense;