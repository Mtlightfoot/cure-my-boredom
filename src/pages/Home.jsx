import React, { useState } from 'react';
import Geo from '../components/Geo';
import LocationData from '../data/LocationData';

function Home() {
  const [location, setLocation] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>News in your location</h1>
        <Geo setLocation={setLocation} />
        {location && <LocationData latitude={location.latitude} longitude={location.longitude} />}
      </div>
      <div style={{ flex: 1 }}>
        {/* Other content on the right-hand side */}
      </div>
    </div>
  );
}

export default Home;

