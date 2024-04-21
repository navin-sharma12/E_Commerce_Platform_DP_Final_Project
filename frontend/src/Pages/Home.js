import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEuroSign,
  faPeopleCarry,
  faMoneyBill,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import bg from "../assets/landingPage.png";

function Home() {
  return (
    <div
      className="landinPage"
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        // height: "165vh", // Set height of the container to fill the viewport vertically
        marginTop: "537px",
      }}
    >
      <Button
        style={{
          fontSize: "1.5em", // Increase font size for bigger button
          backgroundColor: "rgb(238, 136, 73)", // Set background color
          color: "white",
          height: "73px",
          width: "700px", // Set text color
        }}
      >
        Start Shopping
      </Button>
    </div>
  );
}

export default Home;
