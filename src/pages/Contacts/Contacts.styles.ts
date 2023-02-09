import styled from "styled-components";
import { gradientColorDark, lightGray, lightMain, mainColor } from "../../colors/colors";

export const Container = styled.div`
    display: none;
    height: 80vh;

    @media screen and (max-width:900px) {
        height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;


    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${gradientColorDark};
    border-radius: 20px;
    padding: 20px;
    height: 90%;
    max-width: 700px;
    color: #fff;
    z-index: 2;

    h3{
        margin-right: auto;
        margin-bottom: auto;
    }

    div{
        width: 100%;
        padding: 20px 0;
        height: 100%;
    }

    p{
        margin-bottom: 5px;
        font-weight: bolder;
    }

    label{
        width: 90%;
        margin-bottom: 5px;
    }

    input[type=email], input[type=text]{
        display: flex;
        height: 50px;
        border-radius: 10px;
        width: 100%;
        padding: 0 10px;

        &:focus{
            outline: none;
        }
    }

    textarea{
        display: flex;
        border-radius: 10px;
        width: 100%;
        padding: 0 10px;
        margin-bottom: 10px;

        &:focus{
            outline: none;
        }
    }

    input[type=submit]{
        display: flex;
        justify-content: center;
        margin-left: auto;
        font-weight: bold;
        border-radius: 10px;
        width: 100px;
        padding: 0 10px;
        height: 50px;
        cursor: pointer;

    }

    @media screen and (max-width:900px) {
        width: 90%;
    }
`;

export const Info = styled.div<{themeDark: boolean}>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    max-width: 700px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: ${props => !props.themeDark ? lightMain : mainColor};
        width: 70%;
        text-align: center;

        @media screen and (max-width:900px) {
        width: 100%;
    }

        a{
            color: ${mainColor};
        }

        svg{
            font-size: 20px;
        }

        b{
            font-size: 15px;
        }
    }
`;