import styled from "styled-components";
import {Link} from "gatsby";

export const Button = styled(Link)`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 8px;
`;