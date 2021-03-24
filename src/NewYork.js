import "./Charlotte.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Sun1 from "./WeatherIcons/Sun1.png";
import Windy from "./WeatherIcons/Windy.png";
import Tornado from "./WeatherIcons/Tornado.png";
export const NewYork = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="goob">
          New York<hr></hr>
          <br />
          This Week's Forecast
        </h1>
        <div className="cardContainer">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={Tornado} />
              <Card.Body>
                <Card.Title className="Tornado">TORNADO WARNING</Card.Title>
                <Card.Text>
                  <Card.Text>75F°</Card.Text>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Sunday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Tornado} />
              <Card.Body>
                <Card.Title className="Tornado">TORNADO WARNING</Card.Title>
                <Card.Text>79F°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Monday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Windy} />
              <Card.Body>
                <Card.Title>Windy</Card.Title>
                <Card.Text>71°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Tuesday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Windy} />
              <Card.Body>
                <Card.Title>Windy</Card.Title>
                <Card.Text>47°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Wednesday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Sun1} />
              <Card.Body>
                <Card.Title>Sunny</Card.Title>
                <Card.Text>69°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Thursday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Sun1} />
              <Card.Body>
                <Card.Title>Sunny</Card.Title>
                <Card.Text>72°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Friday</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Windy} />
              <Card.Body>
                <Card.Title>Windy</Card.Title>
                <Card.Text>74°</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Saturday</p>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </header>
    </div>
  );
};
export default NewYork;
