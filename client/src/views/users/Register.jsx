import TopNav from "../../components/navbars/TopNav";
import { useState, useEffect } from "react";
import UserService from "../../components/services/UserService";
import { useCookies } from "react-cookie";

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmed: ""
  });

  const [cookies, setCookie, removeCookie] = useCookies(['userId']);
  const [errors, setErrors] = useState({});

  const { userName, password, email, confirmed } = userData;
  const validateForm = () => {
    const { userName, password, email, confirmed } = userData;
    let errors = {};


    if (!userName) {
      errors.userName = 'User Name must not be empty';
    } else if (userName.length < 3) {
      errors.userName = 'User Name must be at least 3 characters';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmed) {
      errors.confirmed = 'Passwords do not match';
    }

    setErrors(errors);

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const res = await UserService.createRegister(userData);
        if (res.status == 200){
          setCookie("userId", res.data.id)
          // window.location.href = '/';
        }
      } catch (error) {
        setErrors({
          badResponse: error.response.data[0].defaultMessage
        })
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    validateForm()
  }, [userData])

  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">
            {errors.response && errors.response}
          </div>

          <form className="login__container--form" onSubmit={handleSubmit}>
            <h2 className="login__container--form--header">Register</h2>
            {errors.badResponse && 
              <h6 className="text-danger">{errors.badResponse}</h6>
            }
            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input name="userName" type="text" className="login__container--form--input" onChange={handleChange} value={userName} />

            <label className="login__container--form--label" htmlFor="email">Email:</label>
            <input name="email" type="text" className="login__container--form--input" onChange={handleChange} value={email} />

            <label className="login__container--form--label" htmlFor="password">Password:</label>
            <input name="password" type="password" className="login__container--form--input" onChange={handleChange} value={password} />

            <label className="login__container--form--label" htmlFor="confirm">Confirm Password:</label>
            <input name="confirmed" type="text" className="login__container--form--input" onChange={handleChange} value={confirmed} />
            {
              Object.keys(errors).length === 0 ?
                <button className="login__container--form--btn">Login</button>
                :
                <button className="login__container--form--btn--disabled" disabled>Login</button>
            }
            
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register;