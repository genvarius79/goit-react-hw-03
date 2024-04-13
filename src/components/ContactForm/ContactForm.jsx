import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
  id: 0,
};

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.lable} htmlFor={nameId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameId} />

        <label className={css.lable} htmlFor={numberId}>
          Number
        </label>
        <Field className={css.field} type="tel" name="number" id={numberId} />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
