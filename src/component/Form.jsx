import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword:Yup.string().oneOf([Yup.ref("password")],"Password do not match").required("Confirmed Password is required")
  });
  let {
    values: { firstname, lastname, email, password, confirmPassword },
    handleChange,
    handleSubmit,
    resetForm,
    errors,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values) {
      console.log(values);
      resetForm();
    },
    validationSchema,
  });
  // console.log(formik);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleChange}
          name="firstname"
        />
        <small>{errors && errors.firstname}</small>

        <br />

        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleChange}
          name="lastname"
        />
        <small>{errors && errors.lastname}</small>
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <small>{errors && errors.email}</small>

        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={handleChange}
          name="password"
        />
        <small>{errors && errors.password}</small>

        <br />

        <label htmlFor="confirm password">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          id="confirmPassword"
          onChange={handleChange}
          name="confirmPassword"
        />
                <small>{errors && errors.confirmPassword}</small>

        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
