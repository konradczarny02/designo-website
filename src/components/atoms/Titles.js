import styled from "styled-components";

export const Title = styled.h3`
  font-size: 32px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  text-align: center;
  line-height: 3rem;

  @media (min-width: 700px) {
    font-size: 48px;
  }
  @media (min-width: 1400px) {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.white};
  text-align: center;

  @media (min-width: 700px) {
    font-size: 16px;
  }

  @media (min-width: 1400px) {
    text-align: left;
  }
`;