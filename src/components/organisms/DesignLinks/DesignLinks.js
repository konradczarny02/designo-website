import React from 'react'
import styled from "styled-components";
import DesignLink from "src/components/molecules/DesignLink/DesignLink";

export const DesignLinksWrapper = styled.div`
  width: 90%;
  margin: 96px auto 290px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
  
  
  @media (min-width: 700px) {
    margin: 120px auto 384px;
  }
  
  @media (min-width: 1400px) {
    margin-top: 160px;
    min-width: calc(1400px * 90%);
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const DesignLinks = ({data}) => {
    return (
        <DesignLinksWrapper>
            {data.map(link => (<DesignLink key={link.id} data={link} />))}
        </DesignLinksWrapper>
    )
}

export default DesignLinks