import React from "react";
import { Navbar, Col } from "react-bootstrap";

import { NavWrapper } from "./styled";
import SidebarItem from "./SideBarItem";
import { ProductConsumer } from "../../store/ProductContext";

export default function Sidebar() {
  return (
    <Col xs={12} md={3}>
      <NavWrapper>
        <Navbar expand="md" className="nav-menu">
          <Navbar.Toggle
            aria-controls="menu-home-store"
            className="button-collapse"
          />
          <Navbar.Collapse id="menu-home-store">
            <ul className="menu navbar-nav">
              <ProductConsumer>
                {value => {
                  return value.categories.map(category => {
                    return <SidebarItem key={category.id} categorie={category} handleCategory={value.handleCategory}/>
                  })
                }}
              </ProductConsumer>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    </Col>
  );
}
