import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row s={8} m={8}>
            <Col>
                <img src={avatar} className="circle responsive-img" alt="avatar" />
            </Col>
        </Row>
        <Row s={8} m={8}>
            <Col>
                <h5>Lorem Ipsum</h5>
                <p className="indigo darken-4 white-text">React Developer</p>
            </Col>
        </Row>
    </Card>
);

export default UserProfile;