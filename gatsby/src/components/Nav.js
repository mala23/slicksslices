import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Masters</Link>
        </li>
        <li>
          <button type="button" onClick={goToSlicemasters}>click me to see slicemasters after 2 seconds</button>
        </li>
      </ul>
    </nav>
  );
}