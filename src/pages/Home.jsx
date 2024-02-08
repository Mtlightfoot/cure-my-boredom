import React, { useState } from 'react';
import Geo from '../components/Geo';
import LocationData from '../data/LocationData';

function Home() {
  const [location, setLocation] = useState(null);

  return (
    <div style={{ display: 'flex', textAlign: "center"}}>
      <div style={{ flex: 1, textAlign: "center"}}>

        <h1>News in your location</h1>
        <Geo setLocation={setLocation} />
        {location && <LocationData latitude={location.latitude} longitude={location.longitude} />}
      </div>

      <div style={{ flex: 1, backgroundColor: "#0661A8", margin: 10, textAlign: "center"}}>
        {/* Other content on the right-hand side */}
        <br />
        <br />
        <br />

        <br />

        <br />
    
        <h1> You have found the Cure!</h1>
          <br />
          <p> this website is designed...</p>
      </div>
    </div>
  );
}

export default Home;

