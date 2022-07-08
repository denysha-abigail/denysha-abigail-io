import React from "react";
import { GhostNavbar } from "react-hamburger-menus";

import "../../assets/css/style.css";

const Menu = () => {
  return (
    <div className="App">
      <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "black",
          listHoverColor: ["transparent", "#fff"],
          floatButtonX: 87,
          floatButtonY: 15,
          navigationButton: {
            borderRadius: "5px",
            width: "50px",
            backgroundColor: "black"
          },
          navigationBackground: {
            backgroundColor: "black"
          },
          iconColor: "#fff"
        }}
      >
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </div>
  );
};

export default Menu;
