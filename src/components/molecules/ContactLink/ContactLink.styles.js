import styled from "styled-components";
import bg from "src/assets/homepage/bg-pattern-small-circle.svg";
import {Paragraph, Title} from "src/components/atoms/Titles";

export const ContactLinkWrapper = styled.div`
  margin: 0 auto;
  padding: 64px 24px;
  width: 90%;
  height: 380px;
  background-image: url("${bg}");
  background-size: 80%;
  background-color: ${({theme}) => theme.colors.peach};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  top: -190px;
  left: 5%;

  @media (min-width: 700px) {
    height: 350px;
    padding: 57px;
    top: -270px;
  }

  @media (min-width: 1400px) {
    left: 10%;
    top: -220px;
    width: 80%;
    height: 300px;
    padding: 72px 96px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-size: 30%;
  }

  ${Title} {
    margin: 0 0 16px;

    @media (min-width: 700px) {
      font-size: 40px;
    }
  }

  ${Paragraph} {
    margin: 0 0 32px;
  }
`;

export const TextWrapper = styled.div`

    
    @media (min-width: 1400px) {
      width: 450px;
    }
`