import registerSchema from "../../validation/register";
import "./Form.css";
import { useFormik } from "formik";

export default function Form() {
  const form = useFormik({
    initialValues: { name: "", email: "" },
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form ~ values:", values);
      setTimeout(() => setSubmitting(false), 3000);
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="login-page">
      <h2 className="useFormik-title">useFormik & Yup</h2>
      <div className="form">
        <form className="login-form" onSubmit={form.handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="نام کاربری "
          />
          <small className="error-msg">
            {form.errors.name && form.touched.name && form.errors.name}
          </small>

          <input
            type="email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="ایمیل"
          />
          <small className="error-msg">
            {form.errors.email && form.touched.email && form.errors.email}
          </small>
          <button
            type="submit"
            disabled={form.isSubmitting}
            className={form.isSubmitting ? "submitted" : ""}
          >
            {form.isSubmitting ? "در حال انجام " : "ثبت نام"}
          </button>
          <p className="message">
           حساب کاربری دارید? <a href="#"> ورود</a>
          </p>
        </form>
      </div>
    </div>
  );
}
