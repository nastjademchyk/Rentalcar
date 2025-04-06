import s from './SearchBtn.module.css';

const SearchBtn = ({ text, className }) => {
  return (
    <button className={`${s.btn} ${className}`} type="submit">
      {text}
    </button>
  );
};

export default SearchBtn;
