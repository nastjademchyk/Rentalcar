import { useEffect, useState } from 'react';
import s from './SearchBox.module.css';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/icons.svg';
import Select from 'react-select';

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

  const brandOptions = brands.map(brand => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = [30, 40, 50, 60, 70, 80].map(price => ({
    value: price,
    label: `${price}`,
  }));

  const customStyles = {
    control: provided => ({
      ...provided,
      zIndex: 10,
      borderRadius: '12px',
      padding: '0',
      width: '196px',
      height: '44px',
      background: 'var(--inputs)',
      border: 'none',
      boxShadow: 'none',
      fontFamily: 'var(--font-family)',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '125%',
      color: 'var(--main)',
    }),
    placeholder: provided => ({
      ...provided,
      color: 'var(--main)',
      fontFamily: 'var(--font-family)',
      fontWeight: 500,
      fontSize: '16px',
    }),
    menu: provided => ({
      ...provided,
      zIndex: 1000,
      maxHeight: '272px',
      overflowY: 'auto',
      borderRadius: '12px',
      fontSize: '16px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      background: 'var(--white)',
    }),
    option: (provided, state) => ({
      ...provided,
      background: 'var(--white)',
      color:
        state.isFocused || state.isSelected ? 'var(--main)' : 'var(--gray)',
      fontFamily: 'var(--font-family)',
      padding: '10px 16px',
      cursor: 'pointer',
    }),
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <label htmlFor={brandId} className={s.description}>
          Car brand
        </label>

        <Select
          inputId={brandId}
          options={brandOptions}
          value={brandOptions.find(option => option.value === brand)}
          onChange={selected => setBrand(selected?.value || '')}
          placeholder="Choose a brand"
          styles={customStyles}
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
      <div className={s.wrapper}>
        <label htmlFor={priceId} className={s.description}>
          Price/ 1 hour
        </label>

        <Select
          inputId={priceId}
          options={priceOptions}
          value={priceOptions.find(option => option.value === Number(price))}
          onChange={selected => setPrice(selected?.value || '')}
          placeholder="Choose a price"
          styles={customStyles}
          components={{ IndicatorSeparator: () => null }}
        />
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
