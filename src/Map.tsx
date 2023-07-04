import { MutableRefObject, useEffect, useRef } from 'react';
import { Icon, Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import '../node_modules/leaflet/dist/leaflet.css';

const resizeMap = (mapRef: MutableRefObject<LeafletMap | null>) => {
  const resizeObserver = new ResizeObserver(() => mapRef?.current?.invalidateSize());
  const container = document.getElementById('map-container');

  if (container) {
    resizeObserver.observe(container);
  }
}

export interface POI {
  coords: [number, number];
  id: string;
  label?: string;
}

interface MapProps {
  focus?: string;
  pois: POI[],
  setFocus: any;
}

export default function Map({ focus, pois, setFocus }: MapProps) {
  const mapRef = useRef<LeafletMap>(null);
  const poisRef = useRef<any>([]);

  const train = new Icon({
    iconUrl: "./train.svg",
    iconSize: [24, 24],
  });

  function EventComponent() {
    useMapEvents({
      popupclose: () => {
        setFocus(null);
      },
    });

    return null;
  }

  function selectPOI(index: number) {
    poisRef.current[index].openPopup();
    setFocus(pois[index].id);
  }

  useEffect(() => {
    pois.forEach((poi, index) => {
      if (poi.id  === focus) {
        poisRef.current[index].openPopup();
      }
    })
  }, [focus]);

  return (
    <MapContainer id="map-container" center={[34.0536909, -118.0967350]} ref={mapRef} whenReady={() => resizeMap(mapRef)} zoom={10} scrollWheelZoom={false}>
      <EventComponent />

      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
      />

      {pois?.length && pois.map((poi, index) => (
        <Marker eventHandlers={{click: () => {selectPOI(index)}}} icon={train} key={poi.id} position={poi.coords} ref={(el) => (poisRef.current[index] = el)}>
          {poi.label && (
            <Popup>
              {poi.label}
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  )
}
