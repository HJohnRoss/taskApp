import TopNav from "../../components/navbars/TopNav";
import { useState, useEffect } from "react";
import UserService from "../../components/services/UserService";


const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  })

  const [errors, setErrors] = useState({});


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
      console.log(res)
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
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" onSubmit={handleSubmit}>
            <h2 className="login__container--form--header">Login</h2>
            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input name="userName" type="text" className="login__container--form--input" onChange={handleChange} value={userData.userName} />

            <label className="login__container--form--label" htmlFor="password">Password:</label>
            <input name="password" type="password" className="login__container--form--input" onChange={handleChange} value={userData.password} />

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

export default Login;