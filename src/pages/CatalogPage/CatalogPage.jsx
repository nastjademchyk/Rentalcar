import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import s from './CatalogPage.module.css';
import { useEffect, useMemo, useState } from 'react';
import { getAllCars, getCars } from '../../redux/operations.js';
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

  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesBrand = brand ? car.brand === brand : true;
      const numericPrice = parseInt(
        car.rentalPrice.replace('$', '').replace(',', '')
      );
      const matchesPrice = price ? numericPrice === price : true;
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
  }, [cars, brand, price, mileageFrom, mileageTo]);

  return (
    <div className={s.container}>
      <SearchBox />
      {loading && page === 1 && <Loader />}

      {filteredCars.length > 0 ? (
        <CatalogList cars={filteredCars} />
      ) : (
        !loading && (
          <p className={s.noCars}>No cars match your search criteria.</p>
        )
      )}

      {filteredCars.length > 0 && cars.length < totalCount && !loading && (
        <div className={s.loadMoreWrapper}>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}

      {cars.length >= totalCount && (
        <p className={s.noCars}>That’s everything we’ve got – for now 😉</p>
      )}

      {loading && page > 1 && <Loader />}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CatalogPage;
