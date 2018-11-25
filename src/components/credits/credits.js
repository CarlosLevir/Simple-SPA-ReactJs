import React from 'react';
import { Col, Card } from 'react-materialize';
import './credits.css';

const Credits = () => (
    <Col m={4} s={2}>
        <Card>
            <p className="madeBy">Made with <b className="heart">❤</b> by <a href="https://github.com/CarlosLevir">Carlos Levir</a></p>
        </Card>
    </Col>
)

export default Credits;