import styled from "styled-components";

import { gradientColorDark } from "../../colors/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
    background: ${gradientColorDark};
    color: white;

    h2{
        text-align: center;
    }
`;