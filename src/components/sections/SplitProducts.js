import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

//get database response
const DataFetcher = (props) => {
  const [data, setData] = useState()
  useEffect(() => {
    const mydata= async()=>{
     const response = await fetch(`http://localhost:5000/record/${props.id}`)
     const respJSON = await response.json()
     setData(respJSON[props.field])}
     mydata()
  }, [props.id,props.field])
  return (
    <>
      {data}
    </>
  )
}

const PicFetcher = (props) => {
  const [data, setData] = useState()
  useEffect(() => {
    const mydata= async()=>{
     const response = await fetch(`http://localhost:5000/record/${props.id}`)
     const respJSON = await response.json()
     setData(respJSON[props.field])}
     mydata()
  }, [props.id,props.field, props.alt, props.width, props.height])
  return (
    <Image
                  src= {data}
                  alt= {props.alt}
                  width={props.width}
                  height={props.height} />
  )
  }

  const ButtonFetcher = (props) => {
    const [data, setData] = useState()
    useEffect(() => {
      const mydata= async()=>{
       const response = await fetch(`http://localhost:5000/record/${props.id}`)
       const respJSON = await response.json()
       setData(respJSON[props.field])}
       mydata()
    }, [props.id,props.field, props.text])
    return (
      <ButtonGroup>
      <Button href = {data} target="_blank" tag="a" color="primary">
        {props.text}
        </Button>
    </ButtonGroup>
    )
    }
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
                  <DataFetcher id="6336f66abb4ba7c001f02042" field="Manufacturer"/>
                  </div>
                <h3 className="mt-0 mb-12">
                <DataFetcher id="6336f66abb4ba7c001f02042" field="Model"/>
                  </h3>
                  <ButtonFetcher id="6336f66abb4ba7c001f02042" field="Website URL" text= "Go to Website" />
                <p className="m-0">
                <DataFetcher id="6336f66abb4ba7c001f02042" field="Description"/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <PicFetcher
                  id= '6336f66abb4ba7c001f02042'
                  field= "Picture URL"
                  alt="Features split 01"
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