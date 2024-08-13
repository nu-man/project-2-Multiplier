import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
export default function Page2(){
    return(
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
              Doctor list
            </Nav.Link>
            <Nav.Link href="#" className="custom-signout fw-semibold">
              Sign out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Container>
      <hr />
    
    <Container fluid className="b-2 p-2">
      <Row className="justify-content-center mt-4">
        <Col md={3}>
          <Card className="text-center p-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">TOTAL FORUMS</Card.Subtitle>
              <Card.Title className="text-primary">18<span className="text-success">&#9650;</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">TOTAL DISCUSSIONS</Card.Subtitle>
              <Card.Title className="text-primary">2,38,485<span className="text-danger">&#9660;</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">TOTAL COMMENTS</Card.Subtitle>
              <Card.Title className="text-primary">50,000,000 <span className="text-success">&#9650;</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center p-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">TOTAL UNIQUE COMMENTERS</Card.Subtitle>
              <Card.Title className="text-primary">33,493<span className="text-success">&#9650;</span></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    
        </>
    )
}