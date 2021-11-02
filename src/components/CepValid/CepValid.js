import React, { useState } from 'react';
import * as S from './CepValid.style';

const CepValid = () => {
  const [cep, setCep] = useState('');
  const [dadosCep, SetDadosCep] = useState(null);
  const [cpf, setCpf] = useState('');
  const [inputError, setInputError] = useState('');
  const [cpfIsTrue, setCpfIsTrue] = useState(false);
  const [msgOk, setMsgOk] = useState(false);

  function cpfIsValid() {
    if(cpf.length === 11) {
        cpf.match(/(\d)\w+/g)
            ?.concat()
            ?.toString()
            ?.replace(/(,)/g, '');
        setCpfIsTrue(true);
        return
    }
    if(cpf.length !== 11){
      setInputError('CPF deve ter 11 digitos')
      return
    }
    setInputError('')
  }

  function validCEP() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      SetDadosCep({ loading: false, error: false, data });
    })
    .catch((error) => SetDadosCep({ loading: false, error, data: [] }));
  }

  function onSubmit(){
    if (cpfIsTrue && dadosCep !== null) {
      setMsgOk(true)
    }
  };

  return (
      <S.Form onSubmit={(d) => console.log(d)}>
        <S.Row>
          <S.LabelRow>
            <S.Label htmlFor="inputEmail">E-mail</S.Label>
          </S.LabelRow>
          <S.InputRow>
            <S.Input
            type="email"
            id="inputEmail" 
            name="email" 
            placeholder="Digite seu E-mail" 
            required
            />
          </S.InputRow>
        </S.Row>
        <S.Row>
        <S.LabelRow>
          <S.Label htmlFor="inputCPF">CPF</S.Label>
        </S.LabelRow>
        <S.InputRow>
          <S.Input
          type="text"
          name="cpf"
          placeholder="Digite seu CPF"
          onChange={e => setCpf(e.target.value)}
          onBlur={cpfIsValid}
          maxLength="11"
          required
          />
          {inputError}
        </S.InputRow>
        </S.Row>
        <S.Row>
        <S.LabelRow>
          <S.Label htmlFor="inputCEP">CEP</S.Label>
        </S.LabelRow>
        <S.InputRow>
          <S.Input
          type="number"
          name="CEP"
          placeholder="Digite seu CEP"
          onChange={e => setCep(e.target.value)}
          required
          />
        </S.InputRow>
        </S.Row>

        <S.Button type="button" onClick={validCEP}>Validar CEP</S.Button>
          {dadosCep && (
            <>
              <S.Input
                type="text"
                defaultValue={dadosCep?.data.logradouro}
                id="inputLogradouro"
                name="logradouro"
              />
              <S.Input type="text" value={dadosCep?.data.uf} readOnly />
              <S.Input type="text" value={dadosCep?.data.localidade} readOnly />
              <S.Input type="text" value={dadosCep?.data.bairro} readOnly />
            </>
          )}
        <S.Row>
          <S.Button type="submit" onClick={onSubmit} >Comprar</S.Button>
        </S.Row>
        {msgOk && (
          <p>Compra com o CPF:{cpf}, foi efetuada com sucesso!</p>
        )}
      </S.Form>
  );
};

export default CepValid;