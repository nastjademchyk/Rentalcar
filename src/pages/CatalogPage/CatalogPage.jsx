import BookForm from '../../components/BookForm/BookForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div>
      <SearchBox />
      <BookForm />
    </div>
  );
};

export default CatalogPage;
