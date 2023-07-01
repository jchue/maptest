import { useEffect, useRef } from 'react';
import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import '../node_modules/leaflet/dist/leaflet.css';

const resizeMap = (mapRef) => {
  const resizeObserver = new ResizeObserver(() => mapRef.current?.invalidateSize());
  const container = document.getElementById('map-container');

  if (container) {
    resizeObserver.observe(container);
  }
}

export default function Map({ focus, setFocus }) {
  const mapRef = useRef();
  const poi1 = useRef();
  const poi2 = useRef();
  const poi3 = useRef();

  const train = new Icon({
    iconUrl: "./train.svg",
    iconSize: [24, 24],
  });

  function MyComponent() {
    const map = useMapEvents({
      popupclose: () => {
        setFocus(null);
      },
    })
    return null
  }

  useEffect(() => {
    switch (focus) {
      case 'poi1':
        poi1.current?.openPopup();
        break;
      case 'poi2':
        poi2.current?.openPopup();
        break;
      case 'poi3':
        poi3.current?.openPopup();
        break;
      default:
        break;
    }
  }, [focus]);

  return (
    <MapContainer id="map-container" center={[34.0536909, -118.0967350]} ref={mapRef} whenReady={() => resizeMap(mapRef)} zoom={10} scrollWheelZoom={false} interactive>
      <MyComponent />
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
      />
      <Marker eventHandlers={{click: () => {setFocus('poi1')}}} icon={train} position={[34.0676169, -118.0879763]} ref={poi1}>
      </Marker>

      <Marker icon={train} position={[33.9830688, -118.0967350]} ref={poi2}>
        <Popup>
          This is an example of a popup with a short description with the option to get more information.<br /><span className="cursor-pointer text-blue-600" onClick={() => {setFocus('poi2')}}>Click for more details</span>
        </Popup>
      </Marker>

      <Marker eventHandlers={{click: () => {setFocus('poi3')}}} icon={train} position={[33.8048260, -118.1682590]} ref={poi3}>
        <Popup eventHandlers={{click: () => (console.log('test'))}} interactive>
          This is an example of a both a popup and scrolling to more information.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
