import React from 'react'
import {LocationsListWrapper} from "src/components/organisms/LocationsList/LocationList.styles";
import Location from "src/components/molecules/Location/Location";

const LocationsList = ({data}) => {
    return (
        <LocationsListWrapper>
            {data.map(({node}) => (<Location key={node.id} data={node} />))}
        </LocationsListWrapper>
    )
}

export default LocationsList