import React, { Fragment } from 'react';
import useApi from '../../components/useApi';
import * as S from './Product.style';
import { Loading, Error, Data } from '../../components/ProductFetchMap';

const Products = () => {
  const { loading, error, data } = useApi();

  return (
    <Fragment>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data.length && (
        <S.Display>
          <Data products={data} />
        </S.Display>
      )}
    </Fragment>
  );
};

export default Products;