import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import tweeter1 from "../tweeterImages/tweeter1.png";
import tweeter2 from "../tweeterImages/tweeter2.png";

function Interface(props) {
  const { handleChange } = props;
  const { quote, author } = props.quotes[0];

  // it is possible to use @fortawesome/freebrand-svg-icons package to add tweeter icon but I used the traditional way
  const tweetLink =
    `https://twitter.com/intent/tweet?text=` + quote + "...... By " + author;

  return (
    <Fragment>
      <Card id="quote-box">
        <Card.Body>
          <blockquote id="text">{quote}</blockquote>
        </Card.Body>
        <cite id="author">-{author}</cite>

        <div id="tweeter-logo">
          <img src={tweeter1} alt=" tweeter  logo " className="tweeter1" />
          <a href={tweetLink} rel="noopener noreferrer" target="blank">
            {/* I choose the link to open in different page*/}
            <img src={tweeter2} alt="tweeter post logo" className="tweeter2" />
          </a>
          <Button id="new-quote" variant="secondary" onClick={handleChange}>
            New Quote
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}

export default Interface;
