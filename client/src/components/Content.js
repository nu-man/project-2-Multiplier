import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./content.css";
import { Verbalcommunications1,Verbalcommunications2,Verbalcommunications3 } from "./VerbalComm";
import { Brochure1,Brochure2,Brochure3 } from "./Brochure";

export default function Content() {
  let navigate = useNavigate();
  const contentHandler = () => {
    navigate("/content");
  };
  const summaryHandler = () => {
    navigate("/page2");
  };


  return (
    <>
      <Container fluid>
        <div className="nav-container">
          <span className="nav-title">Content</span>
          <div className="mt-2 p-1 filter-container2">
            <form>
              <select id="disease" name="disease" className="forum-container">
                <option value="" disabled selected>
                  Filter by disease
                </option>
                <option value="disease1">Disease 1</option>
                <option value="disease2">Disease 2</option>
              </select>
            </form>
            <span className="menu-container" onClick={summaryHandler}>Summary</span> 
            <span className="menu-container">Support</span>
            <span className="menu-container" onClick={contentHandler}>
              Content
            </span>
            <span className="menu-container">Product</span>
            <span className="menu-container">Trial</span>
          </div>
        </div>

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
                <span className="top-forum">Segment</span>
                <span className="forum-container">Website</span>
                <span className="forum-container">TV Ads</span>
                <span className="forum-container">Brochure</span>
                <span className="forum-container">Verbal communications</span>
              </Card>
            </Col>
            <Col lg={8}>
              <Card className="mt-4 p-3">
                <span className="top-forum">Top Brands</span>
                <Row>
                  <Col lg={4}>
                    {[
                      { name: "Humalog", percentage: "24%" },
                      { name: "Novolog", percentage: "16%" },
                      { name: "Ozempic", percentage: "11%" },
                      { name: "Glyburide", percentage: "10%" },
                      { name: "Victoza", percentage: "9%" },
                      { name: "Apidra", percentage: "8.5%" },
                      { name: "Byetta", percentage: "7.8%" },
                      { name: "Trulicity", percentage: "6.9%" },
                      { name: "Asparat", percentage: "6.5%" },
                      { name: "Fiasp", percentage: "6%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>

                  <Col lg={4}>
                    {[
                      { name: "Metformin", percentage: "15.7%" },
                      { name: "Levemir", percentage: "15.3%" },
                      { name: "Glimepride", percentage: "14.9%" },
                      { name: "Actos", percentage: "14.5%" },
                      { name: "Jardiance", percentage: "13.9%" },
                      { name: "Invokana", percentage: "13.5%" },
                      { name: "Basalgar", percentage: "13.1%" },
                      { name: "Glyburide", percentage: "12.8%" },
                      { name: "Glimpepiride", percentage: "12.4%" },
                      { name: "Amaryl", percentage: "12%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>
                  <Col lg={4}>
                    {[
                      { name: "Januvia", percentage: "14.3%" },
                      { name: "Janumet", percentage: "14%" },
                      { name: "Oseni", percentage: "13.9%" },
                      { name: "Pioglitazone", percentage: "13.5%" },
                      { name: "Nesina", percentage: "12.9%" },
                      { name: "Jentadueto", percentage: "12.5%" },
                      { name: "Tradjenta", percentage: "10.1%" },
                      { name: "Onglyza", percentage: "9.8%" },
                      { name: "Evogliptin", percentage: "9.4%" },
                      { name: "Omarigliptin", percentage: "8%" },
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
        <Container>
          <Card>
          <Row>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Brochure1/>
           </Card>
            </Col>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Brochure2/>
           </Card>
            </Col>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Brochure3/>
           </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Verbalcommunications1/>
           </Card>
            </Col>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Verbalcommunications2/>
           </Card>
            </Col>
            <Col lg={4}>
            <Card className="p-3 m-4">
            <Verbalcommunications3/>
           </Card>
            </Col>
          </Row>
          
          </Card>
        </Container>

        
      </Container>
    </>
  );
}
