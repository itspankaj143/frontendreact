import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col>
            <img
              className="img-fluid"
              src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center flex-column border">
            <div className="d-flex justify-content-center align-items-center flex-column ">
              <h1>John Doe</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, laboriosam.
              </p>
              <button>Explore now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
