import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DiabetesDrugsChart1,DiabetesDrugsChart2,DiabetesDrugsChart3 } from "./DiabetesDrugsChart";
import { useNavigate } from "react-router-dom";

import "./page2.css";
import Content from "./Content";

export default function Page2() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const CommentsData = [
    {
      Platform: "Reddit",
      Content:
        "They put him on 500mg 2x/day metformin. His insurance denied jardience. He tested last week A1C 8.5 Doctor did not increase his metformin.",
      Category: "Patient",
      Topic: "Support bucket",
      Subtopic: "Paperwork Support",
    },
    {
      Platform: "Diabetes Daily Forum",
      Content:
        "$25/ mo with Ozempic saving card. $45 without. I oddly get 2 pens a month though. I'm only on .5 and that's my therapeutic dose. So I fill it every other month.",
      Category: "Patient",
      Topic: "Support bucket",
      Subtopic: "Co-Pay Cards and Financial Support",
    },
    {
      Platform: "Reddit",
      Content:
        "I started on Ozempic recently, and the nurse training was so helpful. I wish they had more follow-ups because learning how to inject it correctly was a bit tricky.",
      Category: "Patient",
      Topic: "Support bucket",
      Subtopic: "Nurse Training Support",
    },
    {
      Platform: "Reddit",
      Content:
        "Invokana was prescribed, but dealing with the insurance paperwork is a nightmare. I am finally frustrated",
      Category: "Patient",
      Topic: "Support bucket",
      Subtopic: "Paperwork Support",
    },
    {
      Platform: "Reddit",
      Content:
        "The financial assistance for Jardiance barely made a dent in the price. I’m grateful for the co-pay card, but it’s still really expensive to stick with it.",
      Category: "Patient",
      Topic: "Support bucket",
      Subtopic: "Co-Pay Cards and Financial Support",
    },
    {
      Platform: "Reddit",
      Content:
        "Pharm tech here! If she is on personal (non government) insurance. She can go to website of medication (jardiance, farxiga ext) and apply for a discount card that will cap the co-pay to around $30ish a month!",
      Category: "HCP",
      Topic: "Communications bucket",
      Subtopic: "Difficulty Finding Information",
    },
    {
      Platform: "Reddit",
      Content:
        "No one's advertising ozempic to diabetics .. they know about it already. The ads are to target ppl for weight loss",
      Category: "Patient",
      Topic: "Communications bucket",
      Subtopic: "Perception of Advertisements",
    },
    {
      Platform: "Reddit",
      Content:
        "Here on Reddit, after joining this group, I got hit with an ad for a weight loss physician who could prescribe Ozempic. Clicked on it. Was connected to a physician who is in my state, set up an appointment on the website, filled out my health history, had a video/phone appointment, and was prescribed Ozempic.\nThe medicine arrived from the mail-order pharmacy a few weeks later. So yes, it's not the Ozempic that comes from the one pharmaceutical company with a patent... It's made by a compounding pharmacy, comes in a vial, not a pen.",
      Category: "Patient",
      Topic: "Communications bucket",
      Subtopic: "Difficulty Finding Information",
    },
    {
      Platform: "Reddit",
      Content:
        "Saw a commercial today and it was so generic. It doesn’t reflect what we really go through as Type 2 diabetics. These ads are always out of touch.",
      Category: "Patient",
      Topic: "Communications bucket",
      Subtopic: "Perception of Advertisements",
    },
    {
      Platform: "Reddit",
      Content:
        "The brochure I got from my doctor was so outdated. It didn’t cover half the questions I had about what to expect when starting the wegovy.",
      Category: "Patient",
      Topic: "Communications bucket",
      Subtopic: "Perception of Advertisements",
    },
    {
      Platform: "Reddit",
      Content:
        "I work in clinical research! If this is something you’re interested in, it could be a great way to keep track of your diabetes. $105 is great, but I’ve seen trials with less pay but fewer visits.",
      Category: "Patient",
      Topic: "Trial bucket",
      Subtopic: "Patient-Centricity Sentiment",
    },
    {
      Platform: "Reddit",
      Content:
        "I’ve participated in multiple trials. One was for an early version of a CGM. It was more for the science than the money for me. The pay was low, but the science part was worth it.",
      Category: "Patient",
      Topic: "Trial bucket",
      Subtopic: "Sentiment on Clinical Trials",
    },
    {
      Platform: "Carenity",
      Content:
        "I did a trial for a drug, can’t remember the name. It seemed to work well, but the tech was outdated. The experience was frustrating, especially with the constant issues with the PalmPilot.",
      Category: "Patient",
      Topic: "Trial bucket",
      Subtopic: "Transparency and Burden",
    },
    {
      Platform: "Reddit",
      Content:
        "I was in a trial around 2012. The real benefit was the free supplies—tons of insulin and strips, plus $50 per doctor visit. The process wasn’t too stressful, and I appreciated the support.",
      Category: "Patient",
      Topic: "Trial bucket",
      Subtopic: "Transparency and Support",
    },
    {
      Platform: "Type 2 diabetes forum",
      Content:
        "Last year, I did a trial for a new injection procedure. $100 per visit, 10 visits. The injection didn’t work",
      Category: "Patient",
      Topic: "Trial bucket",
      Subtopic: "Burden of Participation",
    },
    {
      Platform: "PatientLikeMe",
      Content:
        "I’m glad to see that this new diabetes drug was tested in diverse patient populations. It gives me confidence that it might work for people from different backgrounds, not just a specific group.",
      Category: "Patient",
      Topic: "Product bucket",
      Subtopic: "Diversity",
    },
    {
      Platform: "PatientLikeMe",
      Content:
        "It was frustrating that the side effects weren’t fully explained when I started on this medication. I had to find out the hard way. There needs to be more transparency from the pharma companies.",
      Category: "Patient",
      Topic: "Product bucket",
      Subtopic: "Transparency",
    },
    {
      Platform: "PatientLikeMe",
      Content:
        "Glucophage was promoted as suitable for everyone, but my experience was different. It doesn’t seem to fit people from all walks of life, especially with the lifestyle changes it requires. I have diarhhoea everyday",
      Category: "Patient",
      Topic: "Product bucket",
      Subtopic: "Walks of Life",
    },
    {
      Platform: "Reddit",
      Content:
        "The cost of this Ozempic. Even with insurance, it’s clear that it’s out of reach for many people from lower-income backgrounds. ",
      Category: "Patient",
      Topic: "Product bucket",
      Subtopic: "Socio-Economic Inclusion",
    },
    {
      Platform: "Reddit",
      Content: "Ozempic affordability remains a major issue for most people.",
      Category: "Patient",
      Topic: "Product bucket",
      Subtopic: "Socio-Economic Inclusion",
    },
  ];
  let navigate = useNavigate();
  const contentHandler = () => {
    navigate("/content");
  };
  const summaryHandler = () => {
    navigate("/page2");
  };
  


  const handleCardClick = (topic) => {
    setSelectedTopic(topic);
  };

  // Adjusted filtering to match Topic
  const filteredComments = CommentsData.filter(
    (comment) => comment.Topic === selectedTopic
  );

  return (
    <>
      <Container fluid>
        <div className="nav-container">
          <span className="nav-title">Patient Centricity</span>
          <div className="nav-container">
          <div className="mt-2 p-1 filter-container">
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
        <Container className="mt-2 p-3">
          <Row>
            <Col lg={4}>
              <Card className="mt-4 p-3">
                <span className="top-forum">Top forums</span>
                {[
                  { name: "Reddit", percentage: "17.8%" },
                  { name: "Diabetes Daily Forum", percentage: "15%" },
                  { name: "TuDiabetes Forum", percentage: "14%" },
                  { name: "Drugs.com", percentage: "13%" },
                  { name: "Patient.info Diabetes Forum", percentage: "10.5%" },
                  { name: "Carenity Diabetes Community", percentage: "7.8%" },
                  { name: "PatientLikeMe", percentage: "4.9%" },
                  {
                    name: "Smart Patients - Type 2 Diabetes",
                    percentage: "3.5%",
                  },
                  { name: "myDiabetes", percentage: "2%" },
                  { name: "Beyond Type 2 Community", percentage: "0.6%" },
                ].map((forum, index) => (
                  <div key={index} className="forum-container">
                    <span>{forum.name}</span>
                    <span>{forum.percentage}</span>
                  </div>
                ))}
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
        <Container className="mt-2 p-3">
          <Card>
          <Container className="mb-3">
          <Row>
            <Col lg={6}>
              <Card className="p-3 mt-4">
                <DiabetesDrugsChart1 /> {/* Render the chart here */}
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="p-3 mt-4">
                <DiabetesDrugsChart2 /> {/* Render the chart here */}
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg={6}>
              <Card className="p-3 mt-4">
                <DiabetesDrugsChart3 /> {/* Render the chart here */}
              </Card>
            </Col>
          </Row>
        </Container>
           
          </Card>
        </Container>
        <Container>
        

          <Row className="mt-2">
            <Col lg={3}>
              <Card
                className={`p-4 m-3 my-button `}
                onClick={() => handleCardClick("Support bucket")}
              >
                <div className="title">Support bucket</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Communications bucket")}
              >
                <div className="title">Communications bucket</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Product bucket")}
              >
                <div className="title">Product bucket</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Trial bucket")}
              >
                <div className="title">Trial bucket</div>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="custom-container">
          {filteredComments.map((comment, index) => (
            <Row key={index} className="m-3">
              <Card className="p-4 custom-card3">
                <Card.Title>User</Card.Title>
                <div>
                  <span className="review">{comment.Content}</span>
                  <div className="c-button custom-button">
                    {comment.Platform}
                  </div>
                </div>
              </Card>
            </Row>
          ))}
        </Container>
      </Container>
    </>
  );
}
