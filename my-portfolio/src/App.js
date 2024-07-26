import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/section/Hero";
import Skills from "./components/section/Skill";
import Experience from "./components/section/Experience";
import Education from "./components/section/Education";
import Projects from "./components/section/Projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
function App() {
  return (

    <ThemeProvider theme={darkTheme}> 
    <BrowserRouter>
    <Navbar/>
      <Body>
        <Hero/>
        <Skills/>
        <Experience/>
        <Education/>
        <Projects/>
      </Body>
    </BrowserRouter>
    </ThemeProvider>
     
  );
}

export default App;
