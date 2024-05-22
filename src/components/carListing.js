function CarListing({Bild, Hersteller, Modell, PS, Farbe, Baujahr, Kilometer, Preis}){
    return (
        <div className="auto">
            <img
                src={Bild}
                alt={Modell}
                className='autobild'
            />

            <h1>Name: {Hersteller}</h1>
            <h1>Modell: {Modell}</h1>
            <h1>PS: {PS}</h1>
            <h1>Farbe: {Farbe}</h1>
            <h1>Baujahr: {Baujahr}</h1>
            <h1>Kilometer: {Kilometer}</h1>
            <h1>Preis: {Preis}</h1>
        </div>
    );
}


export default CarListing;