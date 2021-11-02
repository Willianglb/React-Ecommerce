import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  border-radius: 6px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  margin-bottom: auto;
  margin-top: auto;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: scale-down;
`;

export const ProductInfo = styled.div`
  margin-top: auto;
  color: black;
`;

export const ProductName = styled.div`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0.8rem;
`;

export const ProductPrice = styled.div`
  text-align: center;
  margin: 0.8rem;
`;

export const CartController = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddToCart = styled.input`
  display: inline-block;
  background: white;
  border-radius: 9px 9px 9px 0px;
  border: 2px solid purple;
  color: purple;
  padding: 0.25em 1em;
  &:hover {
    background: purple;
    color: white;
    transition: all 0.5s ease;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: auto;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;