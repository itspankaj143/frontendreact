import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../natyre.jpg";
const Dummy = (props) => {
  console.log(props);
  props?.dataone?.map((ele) => {
    console.log(ele);
  });
  return (
    <>
      <Container>
        <Row>
          <img src="../../vite.svg" alt="" />
          <img src={image} alt="" />
          {props?.dataone?.map((ele, i) => {
            console.log("comming data", ele);
            return (
              <Col key={i}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ele.images[0]} />
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Dummy;
