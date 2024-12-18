import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; 
import L from "leaflet"; 
import "./Map.css"

function Map () {
  useEffect(() => {
    const map = L.map('map').setView([45.75, 4.85], 13); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    L.marker([45.75, 4.85]).addTo(map)
      .bindPopup('Bienvenue à Lyon !')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map"></div>;
};

export default Map;



     
  
