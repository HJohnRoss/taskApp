import TopNav from "../../components/navbars/TopNav";
import { useState, useEffect } from "react";
import UserService from "../../components/services/UserService";
import { Link, redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  })

  const [errors, setErrors] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const validateForm = () => {
    let errors = {};

    // if (!email) {
    //   errors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = 'Invalid email format';
    // }
    if (!userData.userName) {
      errors.userName = 'User Name must be not be Empty'
    } else if (userData.userName.length < 3) {
      errors.userName = 'User Name must be at least 3 characters'
    }

    if (!userData.password) {
      errors.password = 'password is required';
    } else if (userData.password.length < 5) {
      errors.password = 'password must be at least 6 characters long';
    }

    setErrors(errors)

    return errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await UserService.login(userData)
      if (res.status == 200) {
        setCookie("userId", res.data.id)
        window.location.href = '/home';
      }
    } catch (error) {
      console.log(error)
    }

  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  useEffect(() => {
    validateForm()
  }, [userData.password, userData.userName])

  return (
    <div className="center">

      <section className="login">
      <h1 className="login__header">Streamline Your Tasks, Unleash Your Potential!</h1>

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" onSubmit={handleSubmit}>
            <h2 className="login__container--form--header">Log In</h2>
            <div className="form-control">
              <label className="login__container--form--label" htmlFor="userName">User Name</label>
              <input name="userName" type="text" className="login__container--form--input" onChange={handleChange} value={userData.userName} />
            </div>
            <div className="form-control">
              <label className="login__container--form--label" htmlFor="password">Password</label>
              <input name="password" type="password" className="login__container--form--input" onChange={handleChange} value={userData.password} />
            </div>
            <Link className="forgot-password">Forgot your password?</Link>
            {
              Object.keys(errors).length === 0 ?
                <button className="login__container--form--btn">Log In &rarr;</button>
                :
                <button className="login__container--form--btn--disabled" disabled>Log In &rarr;</button>
            }
            <Link className="no-account" to={"/register"}>
              Don't have an account? 
            </Link>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login;