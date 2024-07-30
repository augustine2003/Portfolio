import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nino Augus J </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am currently pursuing my Computer Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whatever you are, be a good one."{" "}
          </p>
          <footer className="blockquote-footer">Nino Augus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
