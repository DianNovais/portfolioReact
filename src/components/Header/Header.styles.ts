import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  mainColor,
  gradientColor,
  lightMain,
  lightGray,
  darkGray,
} from "../../colors/colors";

export const Container = styled.div<{ themeDark: boolean }>`
  display: flex;
  flex-direction: column;
  width: 200px;
  box-shadow: 0 0px 50px ${(props) => (props.themeDark ? "#e5e2ec" : "#38465d")};
  height: 100vh;
  z-index: 1;
  background-color: ${(props) => (props.themeDark ? "#f7f6f9" : "#38465d")};
  float: left;
  flex: none;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

export const GroupProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 40px;
  height: 90%;
  padding: 20px 4px;
  gap: 10px;
  color: #444;

  h1 {
    font-size: 25px;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10px 10px 0 10px;

  img {
    width: 20%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TitleOrganity = styled.div<{ themeDark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: ${(props) => (props.themeDark ? "black" : "white")};
  }

  h2 {
    font-style: italic;
    color: ${(props) => (props.themeDark ? "#777" : "#999")};
    font-size: 15px;
    margin-left: auto;
  }
`;

export const ListOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  width: 100%;
  margin: 10vh 0;

  ul {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    margin: 5px;

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const LinkElem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #b7b0cb;
  position: relative;

  svg {
    margin-right: 10px;
    font-size: 30px;
  }

  &.active {
    background: ${gradientColor};
    color: ${mainColor};
  }
  &.active::after {
    content: "";
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${mainColor};
    height: 10px;
    width: 10px;
    position: relative;
    left: 10px;
  }

  @media screen and (max-width: 900px) {
    border-radius: 20px;
    padding: 10px 15px;

    svg {
      margin-right: 5px;
      font-size: 20px;
    }
  }
`;

export const ContentSplash = styled.div`
  background-image: url("/img/splash.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  width: 70%;
  height: 20%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ContactItem = styled.div<{ color: string }>`
  color: #fff;
  border-radius: 40px;
  padding: 10px;
  text-decoration: none;
  background-color: ${(Props) => Props.color};
  cursor: pointer;
  opacity: 0.8;
`;

export const Copy = styled.footer<{ themeDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${(props) => (!props.themeDark ? lightMain : mainColor)};
  background-color: ${(props) => (!props.themeDark ? darkGray : lightGray)};
  margin-top: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
