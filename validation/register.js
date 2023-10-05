/* eslint-disable no-useless-escape */
import * as Yup from "yup";

const regexPattern = /^\w+([\.-]?\w)*@[a-zA-Z]+([\.-]?\w)*(\.[a-zA-Z]{2,3})$/;
const invalidEmail = "آدرس ایمیل صحیح نمی باشد";

const nameMin = "اسم حداقل باید 3 کارکتر داشته باشد";
const nameMax = "اسم حداکثر باید 12 کارکتر داشته باشد";
const nameRequired = "اسم را وارد نمایید";

const emailMin = "ایمیل حداقل باید 10 کارکتر داشته باشد";
const emailMax = "ایمیل حداکثر باید 30 کارکتر داشته باشد";
const emailRequired = "ایمیل را وارد نمایید";

const registerSchema = Yup.object().shape({
  name: Yup.string().min(3, nameMin).max(12, nameMax).required(nameRequired),

  email: Yup.string()
    .matches(regexPattern, invalidEmail)
    .min(10, emailMin)
    .max(30, emailMax)
    .required(emailRequired),
});

export default registerSchema;
