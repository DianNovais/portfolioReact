import styled from "styled-components";
import { gradientColor, mainColor } from "../../colors/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 200px;
    max-width: 900px;
    box-shadow: 0 5px 10px #999;
    background: ${gradientColor};
    border-radius: 20px;
    margin: 0 auto;

    img{
        object-fit: cover;
        height: 100%;
        width: 200px;
        border-radius: 20px 0 0 20px;
        filter: grayscale(90%);
    }

    @media screen and (max-width: 900px){
        img{
            display: none;
        }
    }

    @media screen and (max-width: 500px){
        height: 250px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${mainColor};

    h2{
        padding: 10px;
    }

    p{
        padding: 10px;
    }

    div{
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
                border: 2px solid white;
            }
        }
        .github{
            background-color: #2a2f35;
        }
        .preview{
            border-radius: 0px 0px 10px 0px;
        }
    }

    @media screen and (max-width: 900px) {
        div {
            .github{
                border-radius: 0px 0px 0px 10px;
            }
        }
    }
`;