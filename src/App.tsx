// styled
import * as C from "./App.Styles";

// hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Header from "./components/Header/Header";
import TopConfigs from "./components/TopConfigs/TopConfigs";

// pages
import Skills from "./pages/Skills/Skills";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Qualifications from "./pages/Qualifications/Qualifications";
import Contacts from "./pages/Contacts/Contacts";
import useData from "./hooks/useData";
import { darkGray, lightGray, mainColor } from "./colors/colors";
import { useEffect } from "react";

const App = () => {
  const {themeDark } = useData();
  useEffect(() => {
    (themeDark)
  },[themeDark])
  return (
    <>
      <html>
        <head>
          <meta name="theme-color" content={!themeDark ? darkGray : mainColor} />
        </head>
      </html>

      <C.Container >
        <BrowserRouter>
          <Header />
          <C.ContainerMain color={themeDark ? lightGray : darkGray}>
            <TopConfigs />
            <C.Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/qualifications" element={<Qualifications />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </C.Content>
          </C.ContainerMain>
        </BrowserRouter>
        <C.Copy themeDark={themeDark}>
          <p>Copyright © Dian 2023 </p>
        </C.Copy>
      </C.Container>
    </>
  );
};

export default App;
