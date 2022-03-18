import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 254px 0 64px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.black};
  position: relative;

  @media (min-width: 700px) {
    padding: 160px 0 80px;
  }

  div:first-child {
    @media (min-width: 700px) {
      order: -2;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1400px) {
    min-width: calc(1400px * 90%);
    width: 80%;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 32px 0;
  background-color: ${({theme}) => theme.colors.darkGrey};

  @media (min-width: 700px) {
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    order: -1;
    flex-direction: row;
    margin-left: auto;
  }

  li:last-child {
    margin-right: 0;
  }

  li {
    list-style: none;
    font-size: 14px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 300;
    margin: 16px 0;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.white};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${({theme}) => theme.colors.darkGrey};
        text-decoration-thickness: 2px;
      }
    }


    @media (min-width: 700px) {
      margin: 16px 20px;
    }

  }
`

export const AddressInfo = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: ${({theme}) => theme.colors.lightGrey};

  @media (min-width: 700px) {
    width: calc(100% / 3);
    align-items: flex-start;
  }

  h4 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
  }
`;