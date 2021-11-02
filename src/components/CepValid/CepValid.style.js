import styled from 'styled-components';

export const Form = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  z-index: 100;
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const LabelRow = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const InputRow = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
  z-index: 100;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 100;
`;

export const Label = styled.div`
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

export const Button = styled.button`
  background: white;
  color: purple;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid purple;
  border-radius: 3px;
  &:hover {
    background: purple;
    color: white;
  }
`;