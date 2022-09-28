import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SplitProductList from '../components/sections/SplitProducts';

const Guide1 = () => {

  return (
    <>
      <SplitProductList invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Guide1;