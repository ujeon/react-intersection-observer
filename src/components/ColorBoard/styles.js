import styled from "styled-components";

export const Board = styled.div`
  background: ${props => props.backgroundColor || "transparent"};
  width: 100%;
  height: 100vh;
`;