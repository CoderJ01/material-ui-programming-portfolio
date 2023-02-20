import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import AboutMe from "./pages/AboutMe/AboutMe.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";
import Skills from "./pages/Skills/Skills.page";
import ContactMe from "./pages/ContactMe/ContactMe.page";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  InMemoryCache
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
}

export default App;
