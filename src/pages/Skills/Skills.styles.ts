import styled from "styled-components";

export const Container = styled.div`
    display: none;
    height: 80vh;

    @media screen and (max-width: 900px) {
        height: 100%;
    }
`;

export const Title = styled.h3<{themeDark: boolean}>`
  display: flex;
  width: 100%;
  color: ${props => !props.themeDark ? "white" : "black"};
  margin-bottom: 20px;
  font-size: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;

    @media screen and (max-width: 900px) {
        overflow-y: visible;
    }
`;

export const GraphContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`;

export const SkillContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
`;

