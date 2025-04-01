import ViewCatalogBtn from '../../components/ViewCatalogBtn/ViewCatalogBtn.jsx';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <h1 className={s.header}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <ViewCatalogBtn />
      </div>
    </div>
  );
};
export default HomePage;
