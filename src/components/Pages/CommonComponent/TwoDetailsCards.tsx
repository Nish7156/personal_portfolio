import React from "react";

function TwoDetailsCards() {
  return (
    <>
      <div className="left-details">
        <img
          decoding="async"
          src="/images/icon2.png"
          alt="Icon"
          className="star-icon"
        />

        <ul>
          <li>
            <p>Year</p>
            <h4>2023</h4>
          </li>
          <li>
            <p>Client</p>
            <h4>Raven Studio</h4>
          </li>
          <li>
            <p>Services</p>
            <h4>Web Design</h4>
          </li>
          <li>
            <p>Project</p>
            <h4>Dynamic</h4>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TwoDetailsCards;
