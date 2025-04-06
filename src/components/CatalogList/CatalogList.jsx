import s from './CatalogList.module.css';
import { Link } from 'react-router-dom';
import defaultCarImage from '../../assets/images/defaultCar.jpeg';
import SearchBtn from '../SearchBtn/SearchBtn';
import { useSelector } from 'react-redux';
import sprite from '../../assets/icons.svg';

const CatalogList = ({ cars }) => {
  const { brand, price, mileageFrom, mileageTo } = useSelector(
    state => state.filters
  );

  const filteredCars = cars.filter(car => {
    const matchesBrand = brand ? car.brand === brand : true;

    const matchesPrice = price
      ? parseInt(car.rentalPrice.replace('$', '')) <= Number(price)
      : true;

    const matchesMileageFrom = mileageFrom
      ? car.mileage >= Number(mileageFrom)
      : true;

    const matchesMileageTo = mileageTo
      ? car.mileage <= Number(mileageTo)
      : true;

    return (
      matchesBrand && matchesPrice && matchesMileageFrom && matchesMileageTo
    );
  });

  if (filteredCars.length === 0) {
    return <p className={s.noCars}>No cars available</p>;
  }

  return (
    <ul className={s.catalogList}>
      {filteredCars.map(
        ({
          id,
          img,
          brand,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        }) => (
          <li key={id} className={s.catalogItem}>
            <img
              src={img || defaultCarImage}
              alt={`${brand} ${model}`}
              className={s.carImage}
              onError={e => {
                e.target.src = defaultCarImage;
              }}
            />
            <div className={s.iconWrapper}>
              <svg className={s.iconHeart} width="16" height="16">
                <use href={`${sprite}#icon-heart1`} />
              </svg>
            </div>
            <div className={s.carInfo}>
              <div className={s.mainInfo}>
                <h2 className={s.carBrand}>
                  <span className={s.accent}> {brand}</span> {model},{' '}
                  <span className={s.accent}>{year}</span>
                </h2>
                <p>${rentalPrice}</p>
              </div>
              <div className={s.addressRentalCompany}>
                <p className={s.additionalInfo}>
                  <span className={s.city}>{address.split(', ')[1]}</span>
                  <span className={s.country}>{address.split(', ')[2]}</span>
                </p>
                <p className={s.additionalInfo}>{rentalCompany}</p>
              </div>
              <div className={s.typeMileage}>
                <p className={s.additionalInfo}>{type}</p>
                <p className={s.additionalInfo}>{mileage} km</p>
              </div>
            </div>

            <Link to={`/catalog/${id}`} className={s.carLink}>
              <SearchBtn text="Read more" className={s.searchBtn} />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default CatalogList;
