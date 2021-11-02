import styled from 'styled-components';

export const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 32px;
  row-gap: 16px;
  grid-auto-columns: auto;
  margin: 70px 16px 0px 16px;
`;