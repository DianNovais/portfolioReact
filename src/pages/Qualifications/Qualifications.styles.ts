import styled from "styled-components";

export const Container = styled.div`
    display: none;
    height: 80vh;

    @media screen and (max-width: 900px) {
        height: 100%;
    }
`;

export const Info = styled.p`
    font-weight: bold;
    color: #777;
    max-width: 900px;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    height: 100%;
    overflow-y: scroll;

    @media screen and (max-width: 900px) {
        overflow-y: visible;
    }
`