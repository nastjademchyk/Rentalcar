import s from './Heart.module.css';
import { useState } from 'react';
import sprite from '../../assets/icons.svg';
import clsx from 'clsx';

const Heart = ({ carId }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(carId);
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (favorites.includes(carId)) {
      updatedFavorites = favorites.filter(id => id !== carId);
    } else {
      updatedFavorites = [...favorites, carId];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(prev => !prev);
  };

  return (
    <button type="button" className={s.iconWrapper} onClick={toggleFavorite}>
      <svg
        className={clsx(s.iconHeart, { [s.active]: isFavorite })}
        width="16"
        height="16"
      >
        <use href={`${sprite}#${isFavorite ? 'icon-heart2' : 'icon-heart1'}`} />
      </svg>
    </button>
  );
};

export default Heart;
