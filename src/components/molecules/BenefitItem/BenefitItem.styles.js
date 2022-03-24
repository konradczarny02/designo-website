import styled from "styled-components";

export const BenefitItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 700px) {
    display: grid;
    grid-row-gap: 16px;
    grid-column-gap: 48px;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 70px 150px
  }

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  div {
    @media (min-width: 700px) {
      grid-row: 1/3;
    }
  }

  h3 {
    margin: 48px 0 32px;
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.darkGrey};

    @media (min-width: 700px) {
      grid-row: 1/2;
      margin: auto 0 0;
      display: flex;
    }

    @media (min-width: 1400px) {
      text-align: center;
    }
  }

  p {
    color: ${({theme}) => theme.colors.darkGrey};
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    @media (min-width: 700px) {
      grid-row: 2/3;
      text-align: left;
      margin: 0 0 auto;
    }

    @media (min-width: 1400px) {
      text-align: center;
    }
  }

`;