import styled from 'styled-components';

export const NavLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavContent = styled.div``;

export const ModalDiv = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 3px 3px 3px 3px #dedce0;
  background-color: rgb(166, 235, 146);
`;

export const ModalTitle = styled.div`
  font-size: 28px;
  text-align: center;
`;

export const ModalContent = styled.div`
  font-size: 18px;
`;

export const ScreenDiv = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.screenState === 'go' ? 'green' : 'rgb(243, 243, 176)'};
`;

export const ScreenTitle = styled.div`
  font-size: 28px;
`;

export const ScreenContent = styled.div`
  font-size: 18px;
`;

export const InputDiv = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableTr = styled.tr``;

export const TableTd = styled.td``;
