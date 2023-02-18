import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import AboutMe from "./pages/AboutMe/AboutMe.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Skills from "./pages/Skills/Skills.page";
import ContactMe from "./pages/ContactMe/ContactMe.page";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<AboutMe/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="contact-me" element={<ContactMe/>}/>
          <Route path="*" element={<AboutMe/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
