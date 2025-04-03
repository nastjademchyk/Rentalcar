import { useDispatch, useSelector } from 'react-redux';
import s from './CarPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCarById } from '../../redux/operations.js';

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
      <img
        src={img || defaultCarImage}
        alt={`${brand} ${model}`}
        className={s.carImage}
      />
      <h2>
        {brand} {model}, {year}
      </h2>
      <p>
        <strong>Price:</strong> ${rentalPrice}
      </p>
      <p>
        <strong>Location:</strong> {address}
      </p>
      <p>
        <strong>Company:</strong> {rentalCompany}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Mileage:</strong> {mileage} km
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};
export default CarPage;
