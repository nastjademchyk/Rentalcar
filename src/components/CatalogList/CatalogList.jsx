import s from './CatalogList.module.css';
import { Link } from 'react-router-dom';
import defaultCarImage from '../../assets/images/defaultCar.jpeg';
import SearchBtn from '../SearchBtn/SearchBtn';
import { useSelector } from 'react-redux';

const CatalogList = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return <p className={s.noCars}>No cars available</p>;
  }

  return (
    <ul className={s.catalogList}>
      {cars.map(
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
                  {' '}
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
