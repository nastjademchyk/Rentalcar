import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './SearchBox.module.css';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { useEffect, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../redux/operations.js';
import sprite from '../../assets/icons.svg';

const SearchBox = () => {
  const priceId = useId();
  const brandId = useId();
  const milageId = useId();

  return (
    <Formik
      initialValues={{ brand: '', price: '', mileageFrom: '', mileageTo: '' }}
      onSubmit={values => {
        dispatch(setBrandFilter(values.brand));
      }}
    >
      <Form className={s.form}>
        <div className={s.wrapper}>
          <label htmlFor={brandId} className={s.description}>
            Car brand
          </label>
          <Field
            as="select"
            name="brand"
            className={s.selectPrice}
            id={brandId}
          >
            <option value="">Choose a brand</option>
            {[
              'Aston Martin',
              'Audi',
              'BMW',
              'Bentley',
              'Buick',
              'Chevrolet',
              'Chrysler',
              'GMC',
              'HUMMER',
              'Hyundai',
              'Kia',
              'Lamborghini',
              'Land Rover',
              'Lincoln',
              'MINI',
              'Mercedes-Benz',
              'Mitsubishi',
              'Nissan',
              'Pontiac',
              'Subaru',
              'Volvo',
            ].map(brand => (
              <option key={brand} value={brand} className={s.brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>
        <div className={s.wrapper}>
          <label htmlFor={priceId} className={s.description}>
            Price/ 1 hour
          </label>
          <Field
            as="select"
            name="price"
            className={s.selectPrice}
            id={priceId}
          >
            <option value="">Choose a price</option>
            {[30, 40, 50, 60, 70, 80, 90, 100].map(price => (
              <option key={price} value={price} className={s.price}>
                {price}
              </option>
            ))}
          </Field>
        </div>
        <div className={s.wrapper}>
          <label htmlFor={milageId} className={s.description}>
            Сar mileage / km
          </label>
          <div className={s.fields}>
            <Field
              id={milageId}
              type="number"
              name="mileageFrom"
              placeholder="From"
              className={s.fieldRight}
            />

            <Field
              type="number"
              name="mileageTo"
              placeholder="To"
              className={s.fieldLeft}
            />
          </div>
        </div>

        <SearchBtn text="Search" />
      </Form>
    </Formik>
  );
};
export default SearchBox;
