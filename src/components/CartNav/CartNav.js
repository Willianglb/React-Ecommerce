import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import cartIcon from '../../assets/cart.svg';
import * as S from './CartNav.style';

const CartNav = () => {
  const { state } = useContext(CartContext);
  const { itemCount } = state;
  let qtyItem = state.items.length;

  return (
    <S.CartDisplay>
      <img src={cartIcon} alt='cart' />
      {itemCount !== 0 ? '(' + qtyItem + ')' : ''}
    </S.CartDisplay>
  );
};

export default CartNav;
