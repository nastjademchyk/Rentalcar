import s from './Logo.module.css';

const Logo = () => {
  return (
    <p className={s.logo}>
      Rental<span className={s.logo_span}>Car</span>
    </p>
  );
};

export default Logo;
