import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartCard = styled.div`
  display: grid;
  grid-template-columns: 15% 48% 10% 18% 10%;
  height: 100px;
  margin: 10px 0 10px 0;

  @media (max-width: 700px) {
    grid-template-columns: 15% 35% 14% 22% 14%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 25% 17% 33% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      'image name name name'
      'image price quantity cost';
  }
`;

export const CartImageHolder = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
`;

export const CartImage = styled.img`
  max-height: 100%;
  max-width: 95%;
  overflow: hidden;
  @media (max-width: 600px) {
    grid-area: image;
  }
`;

export const CartName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    grid-area: name;
  }
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 600px) {
    grid-area: quantity;
  }
`;

export const CartCost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    grid-area: cost;
  }
`;

export const Quantity = styled.input`
  max-width: 35px;
  text-align: center;
  padding: 0px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.2s ease;
  }
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    filter: invert(76%) sepia(76%) saturate(2224%) hue-rotate(295deg) brightness(87%) contrast(98%);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
