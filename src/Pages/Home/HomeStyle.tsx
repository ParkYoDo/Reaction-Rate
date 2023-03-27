import styled from 'styled-components';

export const NavLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavContent = styled.div``;

export const ModalDiv = styled.div`
  width: 300px;
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
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
    height: 300px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 300px;
  }
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const ModalContent = styled.div`
  font-size: 15px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ScreenDiv = styled.div<{ screenState: string }>`
  margin: 0 auto;
  margin-top: 30px;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.screenState === 'go' ? 'green' : 'rgb(243, 243, 176)')};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 600px;
  }
`;

export const ScreenTitle = styled.div`
  font-size: 20px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const ScreenContent = styled.div`
  font-size: 15px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const InputDiv = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const NameInput = styled.input`
  width: 80%;
  padding: 8px;
  border: 1px solid #b7b7b7;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: none;
  outline: none;
`;

export const ChangeBtn = styled.button`
  width: 20%;
  padding: 8px;
  background-color: transparent;
  border: 1px solid black;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  color: gray;
  &:hover {
    color: white;
    background-color: gray;
    border: 1px solid gray;
  }
`;

export const ScoreDiv = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 32px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableTr = styled.tr``;

export const TableTd = styled.td``;
