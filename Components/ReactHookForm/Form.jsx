import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: "", email: "" } });

  const submitForm = (data) => {
    console.log("submitForm ~ data:", data);

    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  };

  const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;



  return (
    <div className="login-page">
      <h2 className="react-hook-form-title">react-hook-form</h2>
      <div className="form" onSubmit={handleSubmit(submitForm)}>
        <form className="login-form">
          <input
            {...register("name", {
              required: "اسم را وارد نمایید",
              minLength: {
                value: 3,
                message: "اسم حداقل باید 3 کارکتر داشته باشد",
              },
              maxLength: {
                value: 12,
                message: "اسم حداکثر باید 12 کارکتر داشته باشد",
              },
            })}
            type="text"
            placeholder="نام کاربری "
          />
          {/* <small className="error-msg">{errors.name && errors.name.message}</small> */}
          <small className="error-msg">{errors?.name?.message}</small>

          <input
            {...register("email", {
              required: "ایمیل را وارد نمایید",
              minLength: {
                value: 10,
                message: "ایمیل حداقل باید 10 کارکتر داشته باشد",
              },
              maxLength: {
                value: 30,
                message: "ایمیل حداکثر باید 30 کارکتر داشته باشد",
              },
              pattern: {
                value: emailPattern,
                message: "آدرس ایمیل صحیح نمی باشد",
              },
            })}
            type="email"
            placeholder="ایمیل"
          />
          <small className="error-msg">{errors?.email?.message}</small>
          <button type="submit" disabled={isSubmitting} className={isSubmitting ? "submitted" : ""}>
            {isSubmitting ? "در حال انجام " : "ثبت نام"}
          </button>
          <p className="message">
            حساب کاربری دارید? <a href="#"> ورود</a>
          </p>
        </form>
      </div>
    </div>
  );
}
