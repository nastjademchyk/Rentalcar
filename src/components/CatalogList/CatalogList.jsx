import s from './CatalogList.module.css';
import { Link } from 'react-router-dom';
import defaultCarImage from '../../assets/images/defaultCar.jpeg';
import SearchBtn from '../SearchBtn/SearchBtn';
import { useSelector } from 'react-redux';

const CatalogList = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return <p>No cars available</p>;
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
            <Link to={`/cars/${id}`} className={s.carLink}>
              <img
                src={img || defaultCarImage}
                alt={`${brand} ${model}`}
                className={s.carImage}
                onError={e => {
                  e.target.src = defaultCarImage;
                }}
              />
              <div className={s.carInfo}>
                <h3>
                  {brand} {model} ({year})
                </h3>
                <p>${rentalPrice}/day</p>
                <p>{address}</p>
                <p>{type}</p>
                <p>{rentalCompany}</p>
                <p>{mileage} km</p>
              </div>
            </Link>
            <SearchBtn text="Read more" />
          </li>
        )
      )}
    </ul>
  );
};
export default CatalogList;
