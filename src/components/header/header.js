import React from "react";
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Row>  
    <Navbar className="indigo darken-4">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/credits">Credits</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;