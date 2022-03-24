import React from 'react'
import styled from "styled-components";
import Location from "src/components/molecules/Location/Location";

export const LocationsListWrapper = styled.div`
  width: 90%;
  margin: 120px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 370px);
  grid-gap: 80px;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 370px;
    grid-gap: 30px;
  }
`;

const LocationsList = ({data}) => {
    return (
        <LocationsListWrapper>
            {data.map(({node}) => (<Location key={node.id} data={node} />))}
        </LocationsListWrapper>
    )
}

export default LocationsList