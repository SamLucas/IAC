import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`;
