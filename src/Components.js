import React from "react";
import { Link, NavLink } from "react-router-dom";

const selectedStyle = {
  backgroundColor: "#555",
  color: "white"
};

export const MainMenu = () => (
  <nav style={{ display: "block" }}>
    <h1> Company Web-site</h1>
    <NavLink
      to="about"
      activeStyle={{
        fontWeight: "bold",
        color: "green"
      }}
    >
      [About]
    </NavLink>
    <NavLink
      exact
      to="products"
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
    >
      [Products]
    </NavLink>
    <NavLink
      to="events"
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
    >
      [Events]
    </NavLink>
  </nav>
);

export const PageTemplate = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
);

export const Products = () => (
  <PageTemplate>
    <section>
      <h1>[products]</h1>
    </section>
  </PageTemplate>
);

export const Events = () => (
  <PageTemplate>
    <section>
      <h1>[events]</h1>
    </section>
  </PageTemplate>
);

export const About = () => (
  <PageTemplate>
    <section>
      <h1>[about]</h1>
    </section>
  </PageTemplate>
);

export const Whoops404 = ({ location }) => (
  <section>{`page on for path ${location.pathname} not found`}</section>
);
