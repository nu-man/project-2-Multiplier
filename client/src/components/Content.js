import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./content.css";
import {
  Verbalcommunications1,
  Verbalcommunications2,
  Verbalcommunications3,
} from "./VerbalComm";
import { Brochure1, Brochure2, Brochure3 } from "./Brochure";
import { AdsChart1, AdsChart2, AdsChart3 } from "./AdsChart";
import { WebsiteChart1, WebsiteChart2, WebsiteChart3 } from "./WebsiteChart";
import jsonData from "./conversion.json"; // Import your JSON data file

// Function to filter data by category
const filterDataByCategory = (category) => {
  return jsonData.filter((item) => item.Category === category);
};

export default function Content() {
  let navigate = useNavigate();
  const contentHandler = () => {
    navigate("/content");
  };
  const summaryHandler = () => {
    navigate("/page2");
  };

  // Filter data for each category
  const websiteData = filterDataByCategory("Website");
  const adsData = filterDataByCategory("TV Ads");
  const brochureData = filterDataByCategory("Brochure");
  const verbalCommunicationsData = filterDataByCategory("Verbal Communications");

  return (
    <>
      <Container>
        <div className="nav-container">
          <span className="nav-title ms-4">Content</span>
          <div className="mt-2 p-3 filter-container2">
            <form>
              <select id="disease" name="disease" className="forum-container">
                <option value="" disabled selected>
                  Filter by disease
                </option>
                <option value="disease1">Type 2</option>
                <option value="disease2">Disease 2</option>
              </select>
            </form>
            <span className="menu-container" onClick={summaryHandler}>
              Summary
            </span>
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
                      { name: "Humalog", percentage: "5.937%" },
                      { name: "Novolog", percentage: "4.048%" },
                      { name: "Ozempic", percentage: "3.797%" },
                      { name: "Diabeta", percentage: "0.05%" },
                      { name: "Victoza", percentage: "2.02%" },
                      { name: "Apidra", percentage: "1.517%" },
                      { name: "Byetta", percentage: "1.355%" },
                      { name: "Trulicity", percentage: "1.28%" },
                      { name: "Aspart", percentage: "0.575%" },
                      { name: "Fiasp", percentage: "0.363%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>

                  <Col lg={4}>
                    {[
                      { name: "Glucophage", percentage: "0.549%" },
                      { name: "Levemir", percentage: "3.167%" },
                      { name: "Glimepride", percentage: "0.513%" },
                      { name: "Actos", percentage: "2.238%" },
                      { name: "Jardiance", percentage: "1.22%" },
                      { name: "Invokana", percentage: "1.032%" },
                      { name: "Basalgar", percentage: "0.616%" },
                      { name: "Glyburide", percentage: "0.554%" },
                      { name: "Glimpepiride", percentage: "0.54%" },
                      { name: "Amaryl", percentage: "0.405%" },
                    ].map((drug, index) => (
                      <div key={index} className="forum-container">
                        <span>{drug.name}</span>
                        <span>{drug.percentage}</span>
                      </div>
                    ))}
                  </Col>
                  <Col lg={4}>
                    {[
                      { name: "Januvia", percentage: "1.828%" },
                      { name: "Janumet", percentage: "0.477%" },
                      { name: "Oseni", percentage: "0.133%" },
                      { name: "Fortamet", percentage: "0.046%" },
                      { name: "Nesina", percentage: "0.051%" },
                      { name: "Jentadueto", percentage: "0.035%" },
                      { name: "Tradjenta", percentage: "0.128%" },
                      { name: "Onglyza", percentage: "0.179%" },
                      { name: "Evogliptin", percentage: "0.09%" },
                      { name: "Omarigliptin", percentage: "0.04%" },
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
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Website</h6>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <WebsiteChart1 data={websiteData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <WebsiteChart2 data={websiteData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <WebsiteChart3 data={websiteData} />
                </Card>
              </Col>
            </Row>
            <Row>
              <h6 className="chart-title m-3">TV Ads</h6>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <AdsChart1 data={adsData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <AdsChart2 data={adsData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <AdsChart3 data={adsData} />
                </Card>
              </Col>
            </Row>
            <Row>
              <h6 className="chart-title m-3">Brochure</h6>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Brochure1 data={brochureData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Brochure2 data={brochureData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Brochure3 data={brochureData} />
                </Card>
              </Col>
            </Row>
            <Row>
              <h6 className="chart-title m-3">Verbal Communications</h6>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Verbalcommunications1 data={verbalCommunicationsData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Verbalcommunications2 data={verbalCommunicationsData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-4">
                  <Verbalcommunications3 data={verbalCommunicationsData} />
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    </>
  );
}
