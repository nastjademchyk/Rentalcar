import { useDispatch, useSelector } from 'react-redux';
import s from './CarPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCarById } from '../../redux/operations.js';
import BookForm from '../../components/BookForm/BookForm.jsx';
import sprite from '../../assets/icons.svg';

const CarPage = () => {
  const { id } = useParams();
  const cars = useSelector(state => state.cars.cars);
  const carDetails = useSelector(state => state.cars.carDetails);
  const car = cars.find(car => car.id === Number(id)) || carDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!car) {
      dispatch(getCarById(id));
    }
  }, [id, car, dispatch]);

  if (!car) {
    return <p>Loading...</p>;
  }

  const {
    img,
    brand,
    model,
    year,
    address,
    mileage,
    rentalPrice,
    description,
    type,
    rentalCompany,
    // rentalConditions,
    // functionalities,
    // fuelConsumption,
    // engineSize,
  } = car;
  return (
    <div className={s.carPage}>
      <div className={s.left}>
        <img
          src={img || defaultCarImage}
          alt={`${brand} ${model}`}
          className={s.carImage}
        />
        <BookForm />
      </div>
      <div className={s.right}>
        <h2 className={s.carBrand}>
          {brand} {model}, {year}
        </h2>

        <div className={s.addressRentalCompany}>
          <div className={s.address}>
            <svg className={s.icon} width="16" height="16">
              <use href={`${sprite}#icon-Location`} />
            </svg>
            <p className={s.additionalInfo}>
              <span className={s.city}>{address.split(', ')[1]}</span>
              {', '}
              <span className={s.country}>{address.split(', ')[2]}</span>
            </p>
            <p>Mileage: {mileage} km</p>
          </div>
          <p className={s.price}>${rentalPrice}</p>

          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default CarPage;
