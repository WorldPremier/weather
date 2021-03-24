import "./DailyView.css";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Sun1 from "./WeatherIcons/Sun1.png";
import SnowImage from "./WeatherIcons/SnowImage.png";
import Windy from "./WeatherIcons/Windy.png";
import { DateTime } from "./DateTime";
import { Link } from "react-router-dom";

class DailyView extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Weather App</h1>

          <CardDeck className="cardDeck">
            <Card>
              <Card.Img className="CardImage" variant="top" src={Sun1} />
              <Card.Body>
                <Card.Title>Miami</Card.Title>
                <Card.Title>69°</Card.Title>
                <Card.Text>
                  Sunny
                  <br />
                  <button className="button1">
                    <Link style={{ textDecoration: "none" }} to="/Miami">
                      Weekly View
                    </Link>
                  </button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <DateTime />
              </Card.Footer>
            </Card>
            <Card className="Middle">
              <Card.Img className="CardImage" variant="top" src={SnowImage} />
              <Card.Body>
                <Card.Title>Charlotte</Card.Title>
                <Card.Title>29°</Card.Title>
                <Card.Text>
                  Snow
                  <br />
                  <button className="button1">
                    <Link style={{ textDecoration: "none" }} to="/Charlotte">
                      Weekly View
                    </Link>
                  </button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <DateTime />
              </Card.Footer>
            </Card>
            <Card className="CardImage">
              <Card.Img className="CardImage" variant="top" src={Windy} />
              <Card.Body>
                <Card.Title>New York</Card.Title>
                <Card.Title>47°</Card.Title>
                <Card.Text>
                  Windy
                  <br />
                  <button className="button1">
                    <Link style={{ textDecoration: "none" }} to="/NewYork">
                      Weekly View
                    </Link>
                  </button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <DateTime />
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
export default DailyView;
