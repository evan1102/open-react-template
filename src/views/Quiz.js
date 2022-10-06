import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import QuizSection from '../components/sections/QuizSection';

const Guide1 = () => {

  return (
    <>
      <QuizSection invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Guide1;