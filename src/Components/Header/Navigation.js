import React from "react";
import { Button, Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Resturant</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
