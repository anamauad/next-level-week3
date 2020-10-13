import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orfanatos-map.css";

import markerImg from "../images/map_marker.svg";

function OrfanatosMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerImg} alt="Marcador" />

          <h2>Escolha um orfanato do mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-27.5757756, -48.5887972]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/" className="create">
        <FiPlus size="26" color="#fff" />
      </Link>
    </div>
  );
}

export default OrfanatosMap;
