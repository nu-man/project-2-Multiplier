import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./page2.css";
import profileIcon from "./assets/profilePic.png";

export default function Page2() {
  const data = [
    { name: "Ozempic", value: 12 },
    { name: "Wegovy", value: 9 },
    { name: "Glycophage", value: 15 },
    { name: "Fortamet", value: 10 },
    { name: "Riomet", value: 12 },
    { name: "Rybelsus", value: 11 },
    { name: "Bycetta", value: 12 },
    { name: "Trulicity", value: 17 },
    { name: "Exenatide", value: 13 },
    { name: "Januvia", value: 9 },
  ];
  const data2 = [
    { name: "Medication Adherence and Side Effects", value: 74779 },
    { name: "Efficacy of Different Medications", value: 56635 },
    { name: "Medication Adherence Challenges", value: 43887 },
    { name: "Comparing Oral Medications and Insulin", value: 19027 },
    { name: "New and Emerging Treatments", value: 8142 },
    { name: "Cost and Accessibility of Medications", value: 4918 },
  ];
  const CustomBarChart = () => (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" tickFormatter={(value) => value} />  
          <Tooltip />
          <Bar dataKey="value" fill="#7C3A848C" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

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
      <Container>
        <Row>
          <Col lg={3}>
            <Card className="p-2 m-2">
              <div className="title">TOTAL FORUMS</div>
              <div className="number">18</div>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="p-2 m-2">
              <div className="title">TOTAL DISCUSSIONS</div>
              <div className="number">2,38,485</div>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="p-2 m-2">
              <div className="title">TOTAL COMMENTS</div>
              <div className="number">50,000,000</div>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="p-2 m-2">
              <div className="title">TOTAL UNIQUE COMMENTERS</div>
              <div className="number">33,493</div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={3}>
            <Card className="mt-5 custom-card2">
              <Row>
                <Col lg={8} className=" top-forum">
                  Top Forums
                </Col>
                <Col lg={4} className=" days">
                  Last 7 days
                </Col>
                <Col lg={8}>Reddit</Col>
                <Col lg={4}>100</Col>
                <hr className="custom-hr" />
                <Col lg={8}>Reddit</Col>
                <Col lg={4}>100 </Col>
                <hr className="custom-hr" />
                <Col lg={8}>Reddit</Col>
                <Col lg={4}>100</Col>
                <hr className="custom-hr" />
                <Col lg={8}>Reddit</Col>
                <Col lg={4}>100</Col>
                <hr className="custom-hr" />
              </Row>
              <Row></Row>
            </Card>
          </Col>
          <Col lg={9}>
            <Card className="  mt-5">
              <div>
                <h5 className="top-drugs">Top drugs</h5>
              </div>
              <CustomBarChart />
            </Card>
          </Col>
        </Row>
        <Card className="mt-4 mb-4">
          <div>
            <span className="custom-span2">
              Most frequent topics from topic modelling analysis, with
              percentage of total text responses associated with that topic
            </span>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data2} layout="vertical">
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fill: "#666", fontSize: 10 }}
                    width={200}
                  />
                  <Tooltip
                    formatter={(value) =>
                      new Intl.NumberFormat("en").format(value)
                    }
                  />
                  <Bar dataKey="value" fill="#7C3A848C" barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
        <Row>
          <Col lg={8} className="custom-span2">
            Top Discussion
          </Col>
          <Col lg={4} className="custom-span2">
            {" "}
            Filter by platform
          </Col>
        </Row>
      </Container>
      <Container className="custom-container">
        <Row className="m-3">
          <Card className="p-4 custom-card3">
            <div>
              {" "}
              <img src={profileIcon} alt="profile pic"></img>
              <span className="profile-name">GraavyNoodles</span>
            </div>
            <span className="rivew">
              I've been on Metformin for 6 months, and it has helped lower my
              A1C levels significantly. When I was first diagnosed with type 2
              diabetes, my A1C was around 8.5%, which was quite concerning. My
              doctor prescribed Metformin, starting with a low dose to minimize
              any potential side effects. Over time, we gradually increased the
              dosage to find the right balance that works for me
            </span>
            <div className="c-button">Button</div>
          </Card>
        </Row>
        <Row className="m-3">
          <Card className="p-4 custom-card3">
            <div>
              {" "}
              <img src={profileIcon} alt="profile pic"></img>
              <span className="profile-name">GraavyNoodles</span>
            </div>
            <span className="rivew">
              I've been on Metformin for 6 months, and it has helped lower my
              A1C levels significantly. When I was first diagnosed with type 2
              diabetes, my A1C was around 8.5%, which was quite concerning. My
              doctor prescribed Metformin, starting with a low dose to minimize
              any potential side effects. Over time, we gradually increased the
              dosage to find the right balance that works for me
            </span>
            <div className="c-button">Button</div>
          </Card>
        </Row>
        <Row className="m-3">
          <Card className="p-4 custom-card3">
            <div>
              {" "}
              <img src={profileIcon} alt="profile pic"></img>
              <span className="profile-name">GraavyNoodles</span>
            </div>
            <span className="rivew">
              I've been on Metformin for 6 months, and it has helped lower my
              A1C levels significantly. When I was first diagnosed with type 2
              diabetes, my A1C was around 8.5%, which was quite concerning. My
              doctor prescribed Metformin, starting with a low dose to minimize
              any potential side effects. Over time, we gradually increased the
              dosage to find the right balance that works for me
            </span>
            <div className="c-button">Button</div>
          </Card>
        </Row>
      </Container>
    </>
  );
}
