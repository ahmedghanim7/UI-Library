import styled from "styled-components";
import { NavLink } from "react-router-dom";

// const iLink = styled.div`
//   color: ${(props) => props.theme.background.default};
// `;

export const IndexContiner = styled.div`
  width: 18%;
  height: 100vh;
  background: ${(props) => props.theme.background.default};
`;

export const HeaderContiner = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1% 3%;
  border-top: 0.5px solid gray;
`;

export const ListComponentsContiner = styled.ul`
  width: 100%;
  height: 80vh;
  background: "";
  list-style: none;
`;

export const ItemStyle = styled.li`
  padding: 12px 10%;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.textColors.secondary};
  text-transform: capitalize;
  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SpanStyle = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background.default};
  height: fit-content;
  border: ${({ theme }) => `1px solid ${theme.colors.info}`};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 7px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5em 1em;
  &:hover {
    background: ${(props) => props.theme.background.paper};
  }
`;

export const MneuContiner = styled.div`
  width: 100%;
  height: 80%;
  border-top: 0.1px solid rgba(0, 0, 0, 0.4);
  padding-top: 30px;
`;

export const HeaderItem = styled.h3`
  color: #548cff;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
`;
