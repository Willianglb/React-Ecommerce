import React from 'react';
import ProductCard from './ProductCard/ProductCard';

export const Loading = () => <p>Carregando...</p>;

export const Error = (error) => <p>{error}</p>;

export const Data = ({ products }) =>
  products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.title}
        price={product.price}
        description={product.description}
      ></ProductCard>
    );
  });
