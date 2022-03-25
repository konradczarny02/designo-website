import React from 'react'
import {DetailedLocationWrapper, Details} from "src/components/molecules/DetailedLocation/DetailedLocation.styles";
import {GatsbyImage} from "gatsby-plugin-image";

const DetailedLocation = ({data}) => {
    console.log(data)
    return (
        <DetailedLocationWrapper>
            <GatsbyImage alt={data.name} image={data.mapImage.gatsbyImageData}/>
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