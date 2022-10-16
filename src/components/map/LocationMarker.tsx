import React from 'react';
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L, { control, latLng, LatLngLiteral, LocationEvent } from 'leaflet';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

interface LocationMarkerProps {
    markerPosition: LatLngLiteral;
    setCenter: React.Dispatch<React.SetStateAction<LatLngLiteral>>;
    setMarkerPosition: React.Dispatch<React.SetStateAction<LatLngLiteral>>;
}
export const LocationMarker: React.FC<LocationMarkerProps> = ({
    markerPosition
}) => {
    useMapEvents({
        locationfound: (evt: LocationEvent) => {
            console.log(evt.latlng);
        }
    });
    const map = useMap();

    useEffectOnce(() => {
        const search = GeoSearchControl({
            provider: new OpenStreetMapProvider(),
            style: 'bar',
            showMarker: true,
            showPopup: false,
            autoClose: false,
            retainZoomLevel: false,
            animateZoom: true,
            searchLabel: 'Filtrar por dirección'
        });
        const startMarker = L.layerGroup();
        const location = control.locate({
            strings: {
                title: 'Localización'
            },
            layer: startMarker,
            locateOptions: {
                enableHighAccuracy: true,
                watch: true
            },
            showCompass: true
        });

        L.Routing.control({
            waypoints: [
                latLng(23.14925, -82.35765),
                latLng(23.14925, -82.05765)
            ],
            collapsible: true,
            routeWhileDragging: true,
            show: false
        }).addTo(map);

        map.addControl(search);
        map.addControl(location);

        return () => map.removeControl(search);
    });

    return (
        <Marker position={markerPosition}>
            <Popup>
                Marker example. <br />
            </Popup>
        </Marker>
    );
};
