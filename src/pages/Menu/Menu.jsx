import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import './Menu.css';

const Menu = () => {
  return <>
    <div className="list">
      <div className="listTitle">
        <h1>Our Menu</h1>
      </div>

      <div className="products"> 
      {PRODUCTS.map((products) => (
        <Product data={products}/>
      ))}
        

      </div>


    </div>


  </>;
};

export default Menu;