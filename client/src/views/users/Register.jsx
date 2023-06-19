import TopNav from "../../components/navbars/TopNav"
import { useState, useEffect } from "react"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");

  const [submit, setSubmit] = useState(false);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (password !== confirmed) {
      setSubmit(false)
    } else if (password.length < 8) {
      setSubmit(false)
    } else if (!email.includes("@") || !email.includes(".com")) {
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
    if (!email.includes("@") && email.length > 1 || !email.includes(".com") && email.length > 1) {
      arr.push("Must be a valid email")
    }
    if (password.length < 8 && password.length > 1) {
      arr.push("Password must be at least 8 characters long")
    } else if (password !== confirmed) {
      arr.push("Password and confirmed password must match")
    }
    setErrors(arr)
    console.log(errors)
  }, [confirmed, password, email, username])

  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">



          <form className="login__container--form" action="" method="post">
            <h2 className="login__container--form--header">Register</h2>

            <div className="login__container--errors">
              {
                errors.map((error, i) => {
                  return(
                    <p key={i}>{error}</p>
                  )
                })
              }

            </div>
            <label className="login__container--form--label" htmlFor="userName">Username:</label>
            <input type="text" className="login__container--form--input" onChange={e => setUsername(e.target.value)} value={username} />

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