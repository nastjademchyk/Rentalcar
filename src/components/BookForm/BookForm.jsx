import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';
import s from './BookForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';
import SearchBtn from '../SearchBtn/SearchBtn';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

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
          type="text"
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
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success('Booking submitted successfully!');
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    comment: Yup.string(),
  });
  return (
    <div className={s.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
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
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.formik}>
          <Field
            className={s.field}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="span" className={s.error} />
          <Field
            className={s.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="span" className={s.error} />
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
          <div className={s.btn_container}>
            <SearchBtn className={s.btn} text="Submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default BookForm;
