import React from 'react'
import {DetailedLocationWrapper, Details} from "src/components/molecules/DetailedLocation/DetailedLocation.styles";
import {GatsbyImage} from "gatsby-plugin-image";
import {MapContainer, Marker, TileLayer} from "react-leaflet";


const DetailedLocation = ({data}) => {
    const position = [data.coordinates.latitude, data.coordinates.longitude]
    return (
        <DetailedLocationWrapper>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
            </MapContainer>
            <Details>
                <h2>{data.name}</h2>
                <div>
                    <h4>Designo Office</h4>
                    <p>{data.street}</p>
                    <p>{data.city}</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>P : {data.phone}</p>
                    <p>M : {data.mail}</p>
                </div>
            </Details>
        </DetailedLocationWrapper>
    )
}

export default DetailedLocation