import styled from "styled-components";

export const DetailedLocationWrapper = styled.div`
  display: grid;
  
  @media (min-width: 700px) {
    grid-gap: 30px;
    div {
      border-radius: 10px;
    }
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: 4fr 3fr;
  }
  
  div:first-child {
    height: 320px;
    width: 100%;
    
    @media (min-width: 1400px) {
      grid-column: 2/3;
    }
  }
  
  div:last-child {
    @media (min-width: 1400px) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
  
`;

export const Details = styled.div`
    height: 400px;
    background-color: ${({theme}) => theme.colors.beige};
    padding: 80px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    @media (min-width: 700px) {
      height: 320px;
      padding: 88px 74px;
      flex-direction: row;
      flex-wrap: wrap;
    }

    div {
      text-align: center;
      
      @media (min-width: 700px) {
        text-align: left;
      }
    }
  
    div:nth-child(2) {
      margin-bottom: 24px;
      
      @media (min-width: 700px) {
        width: 50%;
        margin-bottom: 0;
      }
    }
  
    div:nth-child(3) {
      
      @media (min-width: 700px) {
        width: 50%;
      }
    }

    h2 {
      color: ${({theme}) => theme.colors.peach};
      font-size: 32px;
      font-weight: 500;
      letter-spacing: 0.15rem;
      margin-bottom: 24px;
      
      @media (min-width: 700px) {
        width: 100%;
      }
    }

    h4 {
      color: ${({theme}) => theme.colors.darkGrey};
      font-size: 15px;
      font-weight: 700;
    }

    p {
      font-size: 15px;
      color: ${({theme}) => theme.colors.darkGrey};
      font-weight: 400;
    }
`;