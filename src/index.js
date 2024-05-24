import React from 'react';
import ReactDOM from 'react-dom/client';
import CarListing from './components/carListing';
import autoliste from './components/autoliste.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <div className="container">
    {autoliste.map((element, index) =>
      <div className="kachel">
      <CarListing key={index} Hersteller={element.Hersteller} Modell={element.Modell} PS={element.PS} Farbe={element.Farbe} Baujahr={element.Baujahr} Kilometer={element.Kilometer} Preis={element.Preis} Bild={element.Bild}>
      </CarListing>
      </div>
    )}
    </div>

);