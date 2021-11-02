import React, { useContext, useEffect, useState } from 'react';
import * as S from './ProductCard.style'
import { formatter } from '../AppLogic';
import { CartContext } from '../CartContext';

const ProductCard = (props) => {
  const { id, image, altText, name, price, description } = props;
  const { dispatch } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }
  }, [loading])

  return (
    <S.Card>
      {loading ? <p>Incluindo ao carrinho...</p> :
        <>
          <S.StyledLink>
            <S.ImageContainer>
              <S.Image src={image} alt={altText} />
            </S.ImageContainer>
            <S.ProductInfo>
              <S.ProductName>{name}</S.ProductName>
              <S.ProductPrice>{formatter.format(price)}</S.ProductPrice>
            </S.ProductInfo>
          </S.StyledLink>
          <S.CartController>
            <S.AddToCart
              type='submit'
              value='Comprar'
              onClick={() => {
                dispatch({
                  type: 'increment',
                  cost: parseFloat(price),
                  item: {
                    id,
                    name,
                    description,
                    image,
                    price,
                  },
                });
                setLoading(true);
              } } />
          </S.CartController>
        </>
      }
    </S.Card>
  );
};

export default ProductCard;