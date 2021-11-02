import React, { useContext, useRef } from 'react';
import { CartContext } from '../CartContext';
import { formatter } from '../AppLogic';
import * as S from './CartItem.style';
import deleteIcon from '../../assets/delete.svg';

const CartItem = (props) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, image, price, quantity } = props;
  const itemRef = useRef();

  const handleChange = (e) => {
    const newQuantity = Math.max(1, Number(e.target.value) || 1);
    dispatch({
      type: 'custom',
      quantity: newQuantity,
      cost: parseFloat(props.price),
      item: {
        id,
        name,
        image,
        price,
        quantity: newQuantity,
      },
    });
  };

  return (
    <S.CartCard>
      <S.CartImageHolder>
        <S.CartImage src={props.image} alt='changeme' />
      </S.CartImageHolder>
      <S.CartName>
        <S.StyledLink>
          <p>{props.name}</p>
        </S.StyledLink>
      </S.CartName>
      <S.CartQuantity>
        <S.Buttons>
          <S.Quantity type='number' min='1' value={quantity} ref={itemRef} onChange={handleChange} />
          <S.DeleteButton
            onClick={() => {
              dispatch({
                type: 'delete',
                cost: parseFloat(price),
                item: {
                  id,
                },
              });
            }}
          >
            <img src={deleteIcon} alt='delete' />
          </S.DeleteButton>
        </S.Buttons>
      </S.CartQuantity>
      <S.CartCost>
        <p>{formatter.format(quantity * price)}</p>
      </S.CartCost>
    </S.CartCard>
  );
};

export default CartItem;
