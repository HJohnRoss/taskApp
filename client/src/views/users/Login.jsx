import TopNav from "../../components/navbars/TopNav"
import { useState, useEffect } from "react"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState(false);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (password.length < 8) {
      setSubmit(false)
    } else if (username.length < 3) {
      setSubmit(false)
    } else {
      setSubmit(true)
    }

    let arr = []
    if (username.length < 3 && username.length > 1) {
      arr.push("Username must be at least 3 characters long")
    }
    if (password.length < 8 && password.length > 1) {
      arr.push("Password must be at least 8 characters long")
    }
    setErrors(arr)
    console.log(errors)
  }, [password, username])

  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" action="" method="post">
            <h2 className="login__container--form--header">Login</h2>

            <div className="login__container--errors">
              {
                errors.map((error, i) => {
                  return(
                    <p key={i}>{error}</p>
                  )
                })
              }
              </div>

            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input type="text" className="login__container--form--input" onChange={e => setUsername(e.target.value)} value={username} />

            <label className="login__container--form--label" htmlFor="password">Password:</label>
            <input type="password" className="login__container--form--input" onChange={e => setPassword(e.target.value)} value={password} />

            {
              submit ?
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