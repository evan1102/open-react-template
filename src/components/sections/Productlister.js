import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { products, mypicks } from '../elements/dummyData.js';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ProductLister = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  class Product extends React.Component {
    render() {
      return (
        <div className="ProductItem">
          <div className="image">
            <img src={this.props.productImageUrl} />
          </div>
          <div className="middle aligned content">
            <div className="description">
              <div>id:{this.props.id}</div>
              <p>title:{this.props.title}</p>
              <p>description:{this.props.description}</p>
            </div>
            <div className="extra">
              <span>Submitted by:</span>
              <img className="avatar-image" src={this.props.submitterAvatarUrl} />
            </div>
          </div>
        </div>
      );
    }
  }
    
  class ProductList extends React.Component {
    render() {
      const products = this.props.products;
      return products.map(product => (
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      ));
    }
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <div>
      <h1>{mypicks}</h1>
      <ProductList products={products} />
    </div>
    </div>
    </div>
      </div>
    </section>
  );
}

ProductLister.propTypes = propTypes;
ProductLister.defaultProps = defaultProps;

export default ProductLister;