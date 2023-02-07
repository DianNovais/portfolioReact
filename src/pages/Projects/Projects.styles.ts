import styled from "styled-components";

export const Container = styled.div`
    display: none;
    height: 80vh;

    @media screen and (max-width: 900px){
        height: 100%;
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    height: 100%;

    @media screen and (max-width: 900px){
        align-items: center;
        overflow-y: auto;
    }
`;