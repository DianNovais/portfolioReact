import styled from "styled-components";
import { darkGray, gradientColor, mainColor } from "../../colors/colors";
import { blueGrey } from "@mui/material/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 400px;
    background: ${gradientColor};
    border-radius: 10px;
    overflow: hidden;
    margin-right: 5px;

    .imgProject{
        object-fit: cover;
        height: 100%;
        width: 200px;
        border-radius: 20px 0 0 20px;
        filter: grayscale(90%);
    }

    @media screen and (min-width: 1100px){
        height: 400px;
    }

    @media screen and (max-width: 900px){
        .imgProject{
            display: none;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    color: ${mainColor};

    h2{
        padding: 10px;
    }

    h3{
        padding-left: 10px;
    }

    p{
        padding: 10px;
        margin-bottom: 10px;
        overflow-y: auto;
        max-width: 1000px;
        height: 60px;
        margin: 0px 10px;
        border-radius: 10px;
    }

    .technologies{
        display: flex;
        gap: 5px;
        padding: 10px;

        img{
            width: 30px;
            height: 30px;
            object-fit: cover;
        }
    }

    .containerLinks{
        display: flex;
        height: 40px;

        a{  
            display: flex;
            gap: 5px;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            padding: 10px;
            color: white;
            flex: 1;

            &:hover{
                border: 1px solid white;
            }
        }
        .github{
            background-color: #2a2f35;
        }
        .preview{
            border-radius: 0px 0px 10px 0px;
            background: ${mainColor};
        }

        .youtube{
            background: red;
        }
    }

    @media screen and (max-width: 900px) {
        .containerLinks {
            .github{
                border-radius: 0px 0px 0px 10px;
            }
        }
    }
`;