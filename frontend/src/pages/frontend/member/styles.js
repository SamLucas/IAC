import styled from "styled-components";

export const Container = styled.div`
  margin: 100px;
`;

export const Header = styled.div`
  margin: 50px 0px;
`;

export const HeaderTitle = styled.h3`
  font-size: 40px;
  width: 60%;
`;

export const HeaderDescribe = styled.div`
  font-size: 16px;
`;

export const Lista = styled.div`
  border-right: 1px solid ${props => props.theme.colors.first};
  padding-right: 30px;
`;
export const Itens = styled.div`
  margin: 10px 0px;
  padding: 10px;
  border-radius: 10px;
  color: ${props => (props.ativo ? "white" : "black")};
  background-color: ${props =>
    props.ativo ? props.theme.colors.first : props.theme.colors.back};
  cursor: pointer;
`;

export const ItemName = styled.h4``;
export const ItemDescribe = styled.div`
  color: color: ${props =>
    props.ativo ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.6)"};
  
`;
export const View = styled.div``;
export const Name = styled.p`
  font-size: 20px;
  margin: 0px 0px 30px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 10px;
`;

export const ImageProf = styled.img`
  width: 300px;
  height: 400px;
  margin-right: 20px;
`;

export const Describe = styled.div`
  text-align: justify;
  margin-bottom: 20px;
`;

export const LinkLattes = styled.a`
  color: ${props => props.theme.colors.first};
  text-decoration: none;

  font-weight: bold;

  cursor: pointer;
`;

export const ContainerLineSearch = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 40px;
`;
