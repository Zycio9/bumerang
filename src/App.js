
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Typography, Button } from '@mui/material';

import './App.css';


import Header from './Components/NavBar';
import Footer from './Components/Footer';

// pages
import Start from "./Pages/StartPage"
import About from "./Pages/AboutPage"
import Offer from "./Pages/OfferPage"
import Budowlane from "./Pages/OfferBudowlanePage"
import Ogrodowe from "./Pages/OfferOgrodowePage"
import Przyczepy from "./Pages/OfferPrzyczepyPage"
import Contact from "./Pages/ContactPage"


import Banner from "./Components/Banner"


import CategoryTemplate from "./Template/CategoryTemplate";
import ArticleTemplate from "./Template/ArticleTemplate";

function App() {
  const [isStartPath, setIsStartPath] = useState(true);
  // const useCurrentPath = () => {
  //   const location = useLocation()
  //   console.log(location);
  // }


  const useReactPath = () => {
    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
      const winPath = window.location.pathname;
      setPath(winPath);
    };
    useEffect(() => {
      window.addEventListener("popstate", listenToPopstate);
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
    }, []);
    console.log(path);
    return path;
  };



  const path = useLocation();

  useEffect(() => {
    if (path.pathname === "/") {
      setIsStartPath(true);

    } else {
      setIsStartPath(false);
    }
    // document.title = `Kliknięto ${count} razy`;
  }, [path]);




  return (

    <div id="page-container">
      <Header />
      {isStartPath && <Banner />}
      <Container className="content-wrap">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="onas" element={<About />} />
          <Route path="kontakt" element={<Contact />} />

          <Route path="oferta" element={<Offer />} />
          <Route path="oferta/:categoryId" element={<CategoryTemplate />} />
          <Route path="oferta/:categoryId/:articleId" element={<ArticleTemplate />} />
        </Routes>
      </Container>
      <Footer />
    </div>


  );
}

export default App;
