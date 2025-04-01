import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';
import s from './BookForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';
import SearchBtn from '../SearchBtn/SearchBtn';

const CustomDatePicker = ({ field, form, placeholder }) => {
  const { startDate, endDate } = form.values;
  return (
    <DatePicker
      {...field}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={dates => {
        form.setFieldValue(field.name, dates);
      }}
      dateFormat="yyyy/MM/dd"
      selectsRange
      customInput={
        <input
          {...field}
          className={clsx(s.field, s.date_picker)}
          placeholder={placeholder}
        />
      }
    />
  );
};

const BookForm = () => {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <div className={s.wrapper}>
      <div className={s.intro}>
        <h2 className={s.header}>Book your car now</h2>
        <p className={s.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: [null, null],
          comment: '',
        }}
      >
        <Form className={s.formik}>
          <Field
            className={s.field}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <Field
            className={s.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            name="date"
            component={CustomDatePicker}
            placeholder="Booking date"
          />
          <Field
            className={clsx(s.field, s.textarea)}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
        </Form>
      </Formik>

      <div className={s.btn_container}>
        <SearchBtn className={s.btn} text="Submit" />
      </div>
    </div>
  );
};
export default BookForm;
