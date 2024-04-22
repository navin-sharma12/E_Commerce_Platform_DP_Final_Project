import React, { useContext } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCoffee,
  faHome,
  faThermometer,
  faUser,
  faUserTie,
  faFileInvoiceDollar,
  faUserTag,
  faReceipt,
  faChartPie,
  faCartPlus,
  faCarAlt,
  faCubes,
  faUserFriends,
  faAddressBook,
  faShoppingCart,
  faBoxOpen,
  faPeopleCarry,
  faFileInvoice,
  faMoneyBill,
  faBullseye,
  faCube,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import displayToast from "../utils/displayToast";
import { Button, Navbar, Container } from "react-bootstrap";

function Sidenav() {
  const history = useHistory();
  const location = useLocation();
  const { isLoggedIn, setUserData, userData } = useContext(AuthContext);

  const logoutUser = () => {
    displayToast("Logged out successfully!", "success");

    setTimeout(() => {
      setUserData(null);
      history.push("/");
    }, 1000);
  };

  if (!isLoggedIn) {
    return null;
  } else {
    return (
      <Navbar
        style={{
          backgroundColor: "rgb(207, 136, 227)",
          padding: "10px",
          margin: "0",
        }}
      >
        {/* <Container> */}
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "Your Custom Font", // Add your custom font-family
            fontSize: "24px", // Adjust the font size as needed
            fontWeight: "bold", // Set the font weight to bold if desired
            color: "#333",
            // padding: "0",
            // margin: "0",
            // Set the color as needed
            // Add any other styling you'd like
          }}
        >
          Ecommerce Management System
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ marginRight: "25px" }}>
            <Link to="/">
              <FontAwesomeIcon
                icon={faUser}
                className="side-nav-icons"
                style={{ cursor: "pointer" }}
                onClick={(e) => setUserData(null)}
              />
            </Link>
            {/* <b> {userData.designation}</b> : {userData.fullName} */}Hi
          </Navbar.Text>
          <NavItem eventKey="manage-purchase-order">
            <NavIcon>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="side-nav-icons"
                  style={{ color: "black" }}
                />
              </Link>
            </NavIcon>
            {/* <NavText
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Purchase Orders
            </NavText> */}
          </NavItem>

          {/* </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end"> */}
          {/* <Button
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                marginLeft: "20px",
              }}
              className=""
              onClick={logoutUser}
            >
              Logout
            </Button> */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default Sidenav;
