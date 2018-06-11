import React from 'react';

const Cards = () => (
  <div className="Row">
    <div className="Col-1-of-3">
      <div className="Card">
        <div className="Card-Side Card-Side-Front">
          <div className="Card-Picture Card-Picture-1">
            &nbsp;
          </div>
          <h4 className="Card-Heading">
            <span className="Card-Heading-Span-1">
              The Sea Explorer
            </span>
          </h4>
          <div className="Card-Details">
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
            </ul>
          </div>
        </div>
        <div className="Card-Side Card-Side-Back Card-Side-Back-1">
          <div className="Card-Cta">
            <div className="Card-Price-Box">
              <p className="Card-Price-Only">Only</p>
              <p className="Card-Price-Value">$297</p>
            </div>
            <a href="#" className="Btn Btn-White">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;