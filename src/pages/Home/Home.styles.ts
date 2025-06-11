import styled from "styled-components";
import {
  gradientColor,
  lightGray,
  lightMain,
  mainColor,
} from "../../colors/colors";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  overflow-x: hidden;
  height: 80vh;
  clear: both;
 
  

  @media screen and (max-width: 900px) {
    overflow: visible;
    height: auto;
  }
`;

export const Title = styled.h3<{themeDark: boolean}>`
  display: flex;
  color: ${props => !props.themeDark ? "white" : "black"};
  width: 100%;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const ContentAbout = styled.div`
  display: flex;
  height: 80%;
  max-height: 500px;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 900px) {
    height: 100%;
    flex-direction: column;
    max-height: none;
  }
`;

export const TextContent = styled.div<{themeDark: boolean}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 10px;
  color: ${ props => !props.themeDark ? lightMain : mainColor};
  background: ${props => !props.themeDark ? "transparent" : gradientColor};
  border-radius: 20px 0px 0px 20px;

  div {
    display: flex;
    font-size: 25px;
    height: 50px;
  }

  p {
    
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: ${mainColor};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    a{
      color: ${ props => !props.themeDark ? lightMain : mainColor};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 900px) {
    flex: none;
    height: 50%;
    p{
      overflow: visible;
    }
  }
`;

export const ArtContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  a{
    color: black;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    height: 40px;
    width: 150px;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;
    background: ${gradientColor};
    margin-bottom: 10px;
    border: 1px solid black;

    &:hover{
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 900px) {
    flex: none;
    height: 50vh;
    border-radius: 0px 0px 10px 10px;
  }
`;


