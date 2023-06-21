import TopNav from "../../components/navbars/TopNav"
import { useState, useEffect } from "react"

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (password.length < 8) {
      setSubmit(false)
    } else if (userName.length < 3) {
      setSubmit(false)
    } else {
      setSubmit(true)
    }
  }, [password, userName])

  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" action="" method="post">
            <h2 className="login__container--form--header">Login</h2>
            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input type="text" className="login__container--form--input" onChange={e => setUserName(e.target.value)} value={userName} />

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