import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import s from './CatalogPage.module.css';
import { useEffect } from 'react';
import { getCars } from '../../redux/operations.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  if (loading) {
    return 'loading...';
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.container}>
      <SearchBox />
      <CatalogList cars={cars} />
    </div>
  );
};

export default CatalogPage;
