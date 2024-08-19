import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./content.css";

export default function Content() {
  let navigate = useNavigate();
  const communicationHandler = () => {
    navigate("/communication");
  };

  return (
    <>
      <Container fluid>
        <div className="nav-container">
          <span className="nav-title2">Content</span>
          <div>
            <span className="menu-container">Support</span>
            <span className="menu-container" onClick={communicationHandler}>
              Communications
            </span>
            <span className="menu-container">Product</span>
            <span className="menu-container">Trial</span>
          </div>
        </div>
        <hr />
        <Container>
          <Row>
            <Col lg={3}>
              <Card className="p-2 m-2">
                <div className="title">TOTAL FORUMS</div>
                <div className="number">20</div>
              </Card>
            </Col>

            <Col lg={3}>
              <Card className="p-2 m-2">
                <div className="title">TOTAL DISCUSSIONS</div>
                <div className="number">1,20,000</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="p-2 m-2">
                <div className="title">TOTAL COMMENTS</div>
                <div className="number">11,000,000</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="p-2 m-2">
                <div className="title">AVG ENGAGEMENT</div>
                <div className="number">8/thread</div>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="mt-4 p-3">
                <span className="top-forum">SEGMENT</span>
                <span className="forum-container">Website</span>
                <span className="forum-container">Ads</span>
                <span className="forum-container">Brouchure</span>
                <span className="forum-container">Verbal commmunications</span>
              </Card>
            </Col>
            <Col lg={8}>
              <Card className="mt-4 p-3">
                <span className="top-forum">Top drugs</span>
                <Row>
                  <Col lg={6}>
                    {[
                      { name: "Glucophage", percentage: "15%" },
                      { name: "Lantus", percentage: "12%" },
                      { name: "Humalog", percentage: "11%" },
                      { name: "Januvia", percentage: "10%" },
                      { name: "Jardiance", percentage: "9%" },
                      { name: "Victoza", percentage: "8.5%" },
                      { name: "Invokana", percentage: "7.8%" },
                      { name: "Farxiga", percentage: "6.9%" },
                      { name: "Amaryl", percentage: "6.5%" },
                      { name: "Actos", percentage: "6%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>
                  <Col lg={6}>
                    {[
                      { name: "Levemir", percentage: "5.7%" },
                      { name: "Onglyza", percentage: "5.3%" },
                      { name: "Humulin N", percentage: "4.9%" },
                      { name: "Prandin", percentage: "4.5%" },
                      { name: "Glyset", percentage: "3.9%" },
                      { name: "Precose", percentage: "3.5%" },
                      { name: "Ozempic", percentage: "3.1%" },
                      { name: "Avandia", percentage: "2.8%" },
                      { name: "Glucotrol", percentage: "2.4%" },
                      { name: "Steglatro", percentage: "2%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
