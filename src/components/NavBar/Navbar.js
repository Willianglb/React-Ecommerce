import React from 'react';
import * as S from './NavBar.style'
import CartNav from '../CartNav/CartNav';

const Navbar = () => {
  return (
    <S.NavBar>
      <S.NavLinks>
        <li>
          <S.StyledLink
            exact
            to='/'
            activeStyle={{
              color: 'purple',
            }}
          >
            Products
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink
            exact
            to='/cart'
            activeStyle={{
              color: 'purple',
            }}
          >
            <CartNav />
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink
            exact
            to='/'
            activeStyle={{
              color: 'purple',
            }}
          >
            Willianglb
          </S.StyledLink>
        </li>
      </S.NavLinks>
    </S.NavBar>
  );
};

export default Navbar;
