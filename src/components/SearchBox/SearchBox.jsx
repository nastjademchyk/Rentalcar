import { useEffect, useState } from 'react';
import s from './SearchBox.module.css';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/icons.svg';

import {
  setBrandFilter,
  setMileageFilter,
  setPriceFilter,
} from '../../redux/filterSlice.js';
import { getBrands } from '../../redux/operations.js';

const SearchBox = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const priceId = useId();
  const brandId = useId();
  const milageId = useId();
  const dispatch = useDispatch();
  const brands = useSelector(state => state.brands.brands);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(getBrands());
    }
  }, [dispatch, brands.length]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setBrandFilter(brand));
    dispatch(setPriceFilter(Number(price)));
    dispatch(setMileageFilter({ mileageFrom, mileageTo }));
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <label htmlFor={brandId} className={s.description}>
          Car brand
        </label>
        <select
          id={brandId}
          name="brand"
          className={s.selectPrice}
          value={brand}
          onChange={e => setBrand(e.target.value)}
        >
          <option value="">Choose a brand</option>
          {brands &&
            brands.map(brand => (
              <option key={brand} value={brand} className={s.brand}>
                {brand}
              </option>
            ))}
        </select>
      </div>
      <div className={s.wrapper}>
        <label htmlFor={priceId} className={s.description}>
          Price/ 1 hour
        </label>
        <select
          id={priceId}
          name="price"
          className={s.selectPrice}
          value={price}
          onChange={e => setPrice(e.target.value)}
        >
          <option value="">Choose a price</option>
          {[30, 40, 50, 60, 70, 80].map(price => (
            <option key={price} value={price} className={s.price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className={s.wrapper}>
        <label htmlFor={milageId} className={s.description}>
          Сar mileage / km
        </label>
        <div className={s.fields}>
          <input
            id={milageId}
            type="number"
            name="mileageFrom"
            placeholder="From"
            className={s.fieldRight}
            value={mileageFrom}
            onChange={e => setMileageFrom(e.target.value)}
          />

          <input
            type="number"
            name="mileageTo"
            placeholder="To"
            className={s.fieldLeft}
            value={mileageTo}
            onChange={e => setMileageTo(e.target.value)}
          />
        </div>
      </div>

      <SearchBtn text="Search" />
    </form>
  );
};

export default SearchBox;
