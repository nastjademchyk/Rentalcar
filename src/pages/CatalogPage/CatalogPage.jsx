import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import s from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import { getCars } from '../../redux/operations.js';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import Loader from '../../components/Loader/Loader.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, loading, error, totalCount } = useSelector(state => state.cars);
  const { brand, price, mileageFrom, mileageTo } = useSelector(
    state => state.filters
  );
  const [page, setPage] = useState(1);
  const limit = 8;

  const [allCars, setAllCars] = useState(cars);

  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page]);

  useEffect(() => {
    setAllCars(prevCars => [...prevCars, ...cars]);
  }, [cars]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const filteredCars = allCars.filter(car => {
    const matchesBrand = brand ? car.brand === brand : true;
    const matchesPrice = price
      ? parseInt(car.rentalPrice.replace('$', '').replace(',', '')) === price
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
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.container}>
      <SearchBox />
      {loading && <Loader />}
      <CatalogList cars={cars} />
      {cars.length > 0 && cars.length < totalCount && (
        <div className={s.loadMoreWrapper}>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}

      {cars.length >= totalCount && (
        <p className={s.noCars}>That’s everything we’ve got – for now 😉</p>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CatalogPage;
