import {React, ReactDOM, CarListing, bmw, mercedes, opel, bentley} from './import.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="kachel">
    <CarListing
      Hersteller="BMW"
      Modell="120i"
      PS="170"
      Farbe="Schwarz"
      Baujahr="2007"
      Kilometer="185.000"
      Preis="6.700 €"
      Bild={bmw}
    />
    </div>
    <div className="kachel">
    <CarListing
      Hersteller="Mercedes"
      Modell="A 250"
      PS="224"
      Farbe="Schwarz"
      Baujahr="2019"
      Kilometer="45.000"
      Preis="29.000 €"
      Bild={mercedes}
    />
    </div>
    <div className="kachel">
    <CarListing
      Hersteller="Opel"
      Modell="Corsa"
      PS="69"
      Farbe="Weiß"
      Baujahr="2009"
      Kilometer="90.000"
      Preis="3.000 €"
      Bild={opel}
    />
    </div>
      <div className="kachel">
      <CarListing
      Hersteller="Bentley"
      Modell="Bentayga"
      PS="450"
      Farbe="Schwarz"
      Baujahr="2019"
      Kilometer="59.000"
      Preis="130.000 €"
      Bild={bentley}
    />
    </div>

  </div>
);