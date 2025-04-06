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
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.container}>
      <SearchBox />
      <CatalogList cars={cars} />
      {cars.length > 0 && (
        <div className={s.loadMoreWrapper}>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CatalogPage;
