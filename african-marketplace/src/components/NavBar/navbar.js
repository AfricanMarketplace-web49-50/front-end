import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>African Marketplace</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
