import React from 'react'
import DetailedLocation from "src/components/molecules/DetailedLocation/DetailedLocation";
import {DetailedLocationsListWrapper} from "src/components/organisms/DetailedLocationsList/DetailedLocationsList.styles";

const DetailedLocationsList = ({data}) => {
    return (
        <DetailedLocationsListWrapper>
            {data.map(({node}) => (<DetailedLocation key={node.id} data={node} />))}
        </DetailedLocationsListWrapper>
    )
}

export default DetailedLocationsList