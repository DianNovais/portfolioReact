import styled from "styled-components";
import { mainColor } from "../../colors/colors";

export const Container = styled.div<{themeDark: boolean}>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 1vh;
    padding: 20px;

    svg{
        padding-top: 5px;
        font-size: 25px;
        color: ${Props => !Props.themeDark ? "#fff" : "#000"};
        cursor: pointer;
    }
`;