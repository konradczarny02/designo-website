import React from 'react';
import styled from "styled-components";

const HamburgerWrapper = styled.div`
  width: 24px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 700px) {
    display: none;
  }
  
  div {
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.colors.black};
  }
`;

const Hamburger = (props) => {
    return (
        <HamburgerWrapper {...props}>
            <div></div>
            <div></div>
            <div></div>
        </HamburgerWrapper>
    )
}

export default Hamburger