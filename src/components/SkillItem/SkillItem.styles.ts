import styled from "styled-components";
import { gradientColor, lightGray, lightMain, mainColor } from "../../colors/colors";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 180px;
    border-radius: 20px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 5px 10px #999;
    transition: all 0.3s;

    &:hover{
        transform: translateY(-10px);
    }

    .topContainer{
        display: flex;
        justify-content: space-between;

        h3{
            color: ${mainColor};
        }

        img{
            width: 50px;
            height: 50px;
        }
    }

    .starContainer svg{
        font-size: 20px;
        color: yellow;
    }

    p{
        color: #555;
    }


`;