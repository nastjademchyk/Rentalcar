import ClipLoader from 'react-spinners/ClipLoader';
import React from 'react';
import s from './Loader.module.css';

const Loader = ({ loading }) => {
  const override = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <ClipLoader
      className={s.loader}
      color="blue"
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default Loader;
