import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 900px){
        height: 100%;
    }
`;

export const ContentProjects = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;

    @media screen and (max-width: 900px){
        height: 100%;
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 80vh;
    padding: 10px 0;

    @media screen and (max-width: 900px){
        align-items: center;
    }
`;