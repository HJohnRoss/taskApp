import TopNav from "../../components/navbars/TopNav"
import { useState, useEffect } from "react"

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (password !== confirmed) {
      setSubmit(false)
    } else if (password.length < 8) {
      setSubmit(false)
    } else if (!email.includes("@") || !email.includes(".com")) {
      setSubmit(false)
    } else if (userName.length < 3) {
      setSubmit(false)
    } else {
      setSubmit(true)
    }
  }, [confirmed, password, email, userName])

  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" action="" method="post">
            <h2 className="login__container--form--header">Register</h2>
            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input type="text" className="login__container--form--input" onChange={e => setUserName(e.target.value)} value={userName} />

            <label className="login__container--form--label" htmlFor="email">Email:</label>
            <input type="text" className="login__container--form--input" onChange={e => setEmail(e.target.value)} value={email} />

            <label className="login__container--form--label" htmlFor="password">Password:</label>
            <input type="password" className="login__container--form--input" onChange={e => setPassword(e.target.value)} value={password} />

            <label className="login__container--form--label" htmlFor="confirm">Confirm Password:</label>
            <input type="text" className="login__container--form--input" onChange={e => setConfirmed(e.target.value)} value={confirmed} />

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

export default Register;