import React from 'react'
import DetailedLocation from "src/components/molecules/DetailedLocation/DetailedLocation";
import styled from "styled-components";

export const LocationDetailedListWrapper = styled.div`
  margin: 0 auto 310px;
  width: 100%;
  display: grid;
  grid-gap: 40px;
  
  @media (min-width: 700px) {
    width: 90%;
  }
  
  @media (min-width: 1400px) {
    min-width: calc(1400px * 90%);
    width: 80%;
  }
`;

const LocationDetailedList = ({data}) => {
    return (
        <LocationDetailedListWrapper>
            {data.map(({node}) => (<DetailedLocation key={node.id} data={node} />))}
        </LocationDetailedListWrapper>
    )
}

export default LocationDetailedList