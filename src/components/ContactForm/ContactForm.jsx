import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import s from "./ContactForm.module.css";

const addProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, "name should have at least 3 symbols")
    .max(50, "name should have less than 50 symbols")
    .required("Name is required"),
  number: yup
    .string()
    .required("phone is required")
    .min(3, "too short!")
    .max(50, "too long!")
    .matches(/^(?=.*?[1-9])[0-9()-]+$/, "enter valid number"),
});

const initialValues = {
  name: "",
  number: "",
  id: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddProfile = (formData, actions) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(finalUser));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onAddProfile}
      validationSchema={addProfileSchema}
    >
      <Form className={s.formWrapper}>
        <label className={s.label}>
          Name
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label className={s.label}>
          Number
          <Field
            className={s.input}
            type="text"
            name="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
