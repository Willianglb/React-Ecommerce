import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import CepValid from '../../components/CepValid/CepValid'
import * as S from './Cart.style';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state } = useContext(CartContext);

  const cartItems = state.items.map((product) => {
    return (
      <CartItem
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        description={product.description}
      />
    );
  });

  return (
    <S.CartDisplay>
      {cartItems.length ? (
        <div>
          {cartItems}
          <CepValid />
        </div>
      ) : (
        <S.NoItems>
          0 itens no carrinho! <Link to='/'>Compre aqui!</Link>
        </S.NoItems>
      )}
    </S.CartDisplay>
  );
};

export default Cart;
