import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
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
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Guide1" component={Guide1} layout={LayoutDefault} />
          <AppRoute exact path="/FavoriteBikes" component={FavoriteBikes} layout={LayoutDefault} />
          <AppRoute exact path="/Parts" component={Parts} layout={LayoutDefault} />
          <AppRoute exact path="/ConversionKits" component={ConversionKits} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;