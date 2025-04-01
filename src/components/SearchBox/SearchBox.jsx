import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './SearchBox.module.css';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { useId } from 'react';

const SearchBox = () => {
  const brandId = useId();
  return (
    <Formik initialValues={{ brand: '' }}>
      <Form className={s.form}>
        <label htmlFor={brandId}>Car brand</label>
        <Field className={s.brand} as="select" name="brand" id={brandId}>
          <option value="" disabled hidden>
            Choose a brand
          </option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Audi">Audi</option>
          <option value="BWM">BWM</option>
          <option value="Bentley">Bentley</option>
          <option value="Buick">Buick</option>
          <option value="Chevrolet">Chevrolet</option>
        </Field>
        <SearchBtn text="Search" />
      </Form>
    </Formik>
  );
};
export default SearchBox;
