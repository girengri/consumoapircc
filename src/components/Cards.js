import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { image, name, gender, species, status } = this.props.tarje;
        return (
            <Container>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{gender}</Card.Text>
                        <Card.Text>{species}</Card.Text>
                        <Card.Text>{status}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
