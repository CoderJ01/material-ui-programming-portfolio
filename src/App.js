import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/Layout.component";
import Navbar from "./components/Header/Header.component";
import AboutMe from "./pages/AboutMe/AboutMe.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Skills from "./pages/Skills/Skills.page";
import ContactMe from "./pages/ContactMe/ContactMe.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<AboutMe/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="contact-me" element={<ContactMe/>}/>
          <Route path="*" element={<AboutMe/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
