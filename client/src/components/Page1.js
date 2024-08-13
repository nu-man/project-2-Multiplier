import React from "react";
import arrowicon from "./assets/ArrowUp.png";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import "./page1.css";

export default function Page1() {
  return (
    <>
      <Container>
        <Navbar bg="white" expand="lg" className="p-0 custom-navbar">
          <Container fluid>
            <div className="d-flex align-items-center gap-3">
              <div className="multiplier"></div>
            </div>
            <Nav className="ms-auto d-flex align-items-center gap-4">
              <Nav.Link href="#" className="text-muted fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-muted fw-semibold">
                Disease list
              </Nav.Link>
              <Nav.Link href="#" className="custom-signout fw-semibold">
                Sign out
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      <hr />
      <Container>
        <div className="custom-title">
          <span>Select your indication</span>
        </div>
        <div className="custom-subtitle">
          <span>Filter through “disease” “platform” etc</span>
        </div>

        <Row>
          <Col lg={4} className="p-3 mt-5">
            <Card className="p-3 m-2 custom-card-height">
              <Card.Body>
                <div className=" form-title mb-4">Filters</div>
                <Form>
                  <Form.Group>
                    <Form.Label className="form-label">Label</Form.Label>
                    <Form.Control as="select" className="input-background">
                      <option value="option1" ><span className="input-text">Placeholder</span></option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label className="form-label">Label</Form.Label>
                    <Form.Control as="select" className="input-background">
                      <option value="option1">Placeholder</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label className="form-label">Label</Form.Label>
                    <Form.Control as="select" className="input-background">
                      <option value="option1">Placeholder</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label className="form-label">Label</Form.Label>
                    <Form.Control as="select" className="input-background">
                      <option value="option1">Placeholder</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} className="p-3 mt-5">
          <div >
          <Row>
           <Card className="p-4 m-2">
              <Row >
                <Col lg={8} className=" card-heading mb-3">
                  Diabetes type ll
                </Col>
                <Col lg={4} className="last-7">Last 7 days</Col>
              </Row>
              <Row>
                <Col lg={3} className="card-divided">
                  Total forums
                  <br />
                  <div className="numbers">18</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Discussions
                  <br />
                  
                 <div className="numbers">
                 <img
                    src={arrowicon}
                    alt="Arrow Icon"
                    style={{ width: "20px", height: "20px" }}
                  /> 1.5L</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Top Drugs
                  <br />
                  <div className="dot-1"></div>
                  Ozmepic
                  <br />
                  <div className="dot-2"></div>Wegovy
                </Col>
              </Row>
            </Card>
           </Row>
          </div>
          <div >
          <Row>
           <Card className="p-4 m-2">
              <Row className="">
                <Col lg={8} className=" card-heading mb-3">
                  Diabetes type ll
                </Col>
                <Col lg={4} className="last-7">Last 7 days</Col>
              </Row>
              <Row>
                <Col lg={3} className="card-divided">
                  Total forums
                  <br />
                  <div className="numbers">18</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Discussions
                  <br />
                  
                 <div className="numbers">
                 <img
                    src={arrowicon}
                    alt="Arrow Icon"
                    style={{ width: "20px", height: "20px" }}
                  /> 1.5L</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Top Drugs
                  <br />
                  <div className="dot-1"></div>
                  Ozmepic
                  <br />
                  <div className="dot-2"></div>Wegovy
                </Col>
              </Row>
            </Card>
           </Row>
          </div>
          <div >
          <Row>
           <Card className="p-4 m-2">
              <Row className="">
                <Col lg={8} className=" card-heading mb-3">
                  Diabetes type ll
                </Col>
                <Col lg={4} className="last-7">Last 7 days</Col>
              </Row>
              <Row>
                <Col lg={3} className="card-divided">
                  Total forums
                  <br />
                  <div className="numbers">18</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Discussions
                  <br />
                  
                 <div className="numbers">
                 <img
                    src={arrowicon}
                    alt="Arrow Icon"
                    style={{ width: "20px", height: "20px" }}
                  /> 1.5L</div>
                </Col>
                <Col lg={3} className="card-divided">
                  Top Drugs
                  <br />
                  <div className="dot-1"></div>
                  Ozmepic
                  <br />
                  <div className="dot-2"></div>Wegovy
                </Col>
              </Row>
            </Card>
           </Row>
          </div>
         
           
          </Col>
          
        </Row> 
      </Container>
    </>
  );
}
