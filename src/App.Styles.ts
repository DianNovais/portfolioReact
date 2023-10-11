import styled from "styled-components";
import { darkGray, lightGray, lightMain, mainColor } from "./colors/colors";

export const ContainerMain = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Copy = styled.footer<{ themeDark: boolean }>`
  display: none;
  width: 100%;
  height: 40px;
  color: ${(props) => (!props.themeDark ? lightMain : mainColor)};
  background-color: ${(props) => (!props.themeDark ? darkGray : lightGray)};

  @media screen and (max-width:900px) {
        display: flex;
        align-items: center;
        justify-content: center;
}
`;
