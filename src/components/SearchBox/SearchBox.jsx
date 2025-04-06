import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './SearchBox.module.css';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { useEffect, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../redux/operations.js';

const SearchBox = () => {
  return (
    <Formik
      initialValues={{ brand: '' }}
      onSubmit={values => console.log(values)}
    >
      <Form className={s.form}>
        <SearchBtn text="Search" />
      </Form>
    </Formik>
  );
};
export default SearchBox;
