import s from './ViewCatalogBtn.module.css';
import { Link } from 'react-router-dom';
const ViewCatalogBtn = () => {
  return (
    <Link to="/catalog" className={s.link}>
      <button className={s.btn}>View Catalog</button>
    </Link>
  );
};

export default ViewCatalogBtn;
