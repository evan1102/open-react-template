import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Guide1 from './views/Guide1';
import FavoriteBikes from './views/FavoriteBikes';
import ConversionKits from './views/ConversionKits';
import Parts from './views/Parts';

// Database
import RecordList from "./components/recordList";
import Create from "./components/create";
import Edit from "./components/edit";
//import Navbar from "./components/navbar";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        // Layout default tag wraps these pages in the default layout which is the header and footer specified in the layoutdefault.js file
          <LayoutDefault>
        <Routes>
           <Route path="/" element={<RecordList/>} />
           <Route path="/edit/:id" element={<Edit/>} />
           <Route path="/create" element={<Create/>} />
          <Route path="/r" element={<Home/>}/>
          <Route path="/Guide1" element={<Guide1/>} />
          <Route path="/FavoriteBikes" element={<FavoriteBikes/>} />
          <Route path="/Parts" element={<Parts/>} />
          <Route path="/ConversionKits" element={<ConversionKits/>} />
        </Routes>
        </LayoutDefault>
      )} />
  );
}
export default App;