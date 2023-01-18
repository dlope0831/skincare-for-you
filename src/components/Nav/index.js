import React from "react";

function Nav() {
    return (
        <header>
            <h2>
    {/* <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a> */}
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <span>Explore</span>
      </li>
      <li>
        <span>Follow Us</span>
      </li>
    </ul>
  </nav>
        </header>
    )
}

export default Nav;