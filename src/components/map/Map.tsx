import { Box, Flex, Input } from '@chakra-ui/react';
import { LatLngLiteral } from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { LocationMarker } from './LocationMarker';

export const Map = () => {
    const [center, setCenter] = useState<LatLngLiteral>({
        lat: 23.14925,
        lng: -82.35765
    });

    const [markerPosition, setMarkerPosition] = useState<LatLngLiteral>({
        lat: 23.14925,
        lng: -82.35765
    });

    return (
        <Flex height={'full'} width={'full'}>
            <Flex
                as={MapContainer}
                center={center}
                zoom={10}
                scrollWheelZoom={true}
                width={'full'}
                height={'full'}
                display={'flex'}
                justifyContent={'end'}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {markerPosition && (
                    <LocationMarker
                        markerPosition={markerPosition}
                        setCenter={setCenter}
                        setMarkerPosition={setMarkerPosition}
                    />
                )}
            </Flex>
        </Flex>
    );
};
