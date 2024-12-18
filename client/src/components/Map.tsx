import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; 
import L from "leaflet"; 
import "./Map.css"

function Map () {
  useEffect(() => {
    const map = L.map('map').setView([45.764043, 4.835659], 15); 
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    L.marker([45.764043, 4.835659]).addTo(map)
      .bindPopup('Bienvenue à Lyon !')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map"></div>;
};

export default Map;



     
  
