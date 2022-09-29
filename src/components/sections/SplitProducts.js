import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { products, mypicks } from '../elements/dummyData.js';
import { useParams, useNavigate } from "react-router";

const axios = require('axios').default;

//get database response
const AdsContainer = ({children}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const mydata= async()=>{
     const response = await fetch('http://localhost:5000/record/63336f88cc64e0e344d42ea7')
     const respjson = await response.json()
     console.log("json", respjson);
     setData(respjson)}
     mydata()
    
  }, [])
  return (
    <div className="AdsContainer">
      <h6>{data?.Manufacturer}</h6>
    </div>
  )
}

// const AdsContainer = axios.get('http://localhost:5000/record/63336f88cc64e0e344d42ea7')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

//const Myresp = fetch('http://localhost:5000/record/63336f88cc64e0e344d42ea7').then((res)=>console.log(res.json()))

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const SplitProductsList = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: "Here's what we found for you:",
    };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <AdsContainer/>
                  </div>
                <h3 className="mt-0 mb-12">
                Model Name
                  </h3>
                <p className="m-0">
                  Bike Description
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://media.wired.com/photos/5d605bf9f0b4760008c896a3/master/w_1920%2Cc_limit/9-RadRunner-Green-TA.jpg'
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Manufacturer Name
                  </div>
                <h3 className="mt-0 mb-12">
                Model Name
                  </h3>
                <p className="m-0">
                Bike Description
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://media.wired.com/photos/5d605bf9f0b4760008c896a3/master/w_1920%2Cc_limit/9-RadRunner-Green-TA.jpg'
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Manufacturer Name
                  </div>
                <h3 className="mt-0 mb-12">
                  Model Name
                  </h3>
                <p className="m-0">
                  Bike Description
                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://media.wired.com/photos/5d605bf9f0b4760008c896a3/master/w_1920%2Cc_limit/9-RadRunner-Green-TA.jpg'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

SplitProductsList.propTypes = propTypes;
SplitProductsList.defaultProps = defaultProps;

export default SplitProductsList;