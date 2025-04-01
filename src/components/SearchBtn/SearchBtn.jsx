import s from './SearchBtn.module.css';

const SearchBtn = ({ text }) => {
  return <button className={s.btn}>{text}</button>;
};

export default SearchBtn;
