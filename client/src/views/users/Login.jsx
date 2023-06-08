import TopNav from "../../components/navbars/TopNav"

const Login = () => {
  return (
    <div className="center">

      <section className="login">
        <TopNav />

        <div className="login__container">


          <div className="login__container--errors">

          </div>

          <form className="login__container--form" action="" method="">
            <h2 className="login__container--form--header">Login</h2>
            <label className="login__container--form--label" htmlFor="userName">User Name:</label>
            <input type="text" className="login__container--form--input" />

            <label className="login__container--form--label" htmlFor="email">Email:</label>
            <input type="text" className="login__container--form--input" />

            <label className="login__container--form--label" htmlFor="password">Password:</label>
            <input type="password" className="login__container--form--input" />

            <label className="login__container--form--label" htmlFor="confirm">Confirm Password:</label>
            <input type="password" className="login__container--form--input" />

            <button>Create Account!</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login;