// import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = () => {


  return (
    <div id="map" style={{ width: "50%", height: "100vh", marginLeft:'10%'}}>
      <h1 style={{color:'black'}}>hjggjhgfghjgkljkhgu</h1>
       <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    </div>
  );
}


export default Map
