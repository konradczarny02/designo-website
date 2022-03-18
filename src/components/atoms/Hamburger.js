import React from 'react';
import styled from "styled-components";

const HamburgerWrapper = styled.div`
  width: 24px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 700px) {
    display: none;
  }
  
  div {
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.colors.black};
    transition: transform 0.3s ease-in-out;
  }
  
  div:nth-child(2) {
    transform: translateX(${({isOpen}) => isOpen ? '-100%' : '0'});
  }
  
  div:first-child {
    transform: translateY(${({isOpen}) => isOpen ? '8px' : '0'}) rotate(${({isOpen}) => isOpen ? '45deg' : '0'});
  }
  
  div:last-child {
    transform: translateY(${({isOpen}) => isOpen ? '-8px' : '0'}) rotate(${({isOpen}) => isOpen ? '-45deg' : '0'});
  }
`;

const Hamburger = ({onClick, isOpen}) => {
    return (
        <HamburgerWrapper onClick={onClick} isOpen={isOpen}>
            <div></div>
            <div></div>
            <div></div>
        </HamburgerWrapper>
    )
}

export default Hamburger