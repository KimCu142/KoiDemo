import { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="form-container ">
        <div className="col col-3">
          <p className="login-words">Welcome Back !</p>
          <div className="col col-1 ">
            <div className="image-layer">
              <img
                src="https://i.pinimg.com/originals/07/7b/b1/077bb17ae51a7432876989165efa6c0e.png"
                className="form-image-main"
              />
            </div>
            
          </div>
        </div>
        <div className="col col-2">
          <form className="login-form glass" action="/login" method="post">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />

            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <br />
            <br />
            <button type="submit">Login</button>
         <button className="login_google">
              <img
                src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                width={25}
              />
              <span>Continue with Google</span>
            </button>
          </form>


          

          <p className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    );
  }
}
