import React from 'react';
import { Row, Col, Card, Input, Button } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';

const Contact = () => (
    <Row>
        <Col s={12} m={3}>
            <UserProfile />
        </Col>
        <Col s={12} m={8}>
            <h5>Contact</h5>
            <Card>
                <Row>
                    <Input placeholder="name@mail.com" type="mail" label="Email" s={12} />
                    <Input placeholder="Lorem Ipsum..." type="message" label="Email" s={12} />
                    <Col s={12} m={12}>
                        <Button waves="light" className="right grey darken-2">SEND</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
);

export default Contact