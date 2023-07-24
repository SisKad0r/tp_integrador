import React from 'react'
import './maps.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Maps = () => {
    return (
        <div>
            <MapContainer center={[-34.66240576997327, -58.351109007586366]} zoom={20} scrollWheelZoom={false} className='maps'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.66240576997327, -58.351109007586366]}>
                    <Popup>
                        PetShop - "Los 4 Hermanos"
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Maps