import styled from "styled-components";

export const SocialIconsWrapper = styled.ul`
  display: flex;
  padding: 24px 0 64px;
  justify-content: flex-end;

  @media (min-width: 700px) {
    width: calc(100% / 3);
  }

  li {
    list-style: none;
    margin: 0 8px;
    cursor: pointer;
  }
  
  li:last-child {
    margin-right: 0;
  }
  
  path {
    fill: blue;
  }
`;