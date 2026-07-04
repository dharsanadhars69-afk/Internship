import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const login = () => {
    alert("Login Successful!");
    navigate("/home");
  };

  const togglePassword = () => {
    const password = document.getElementById("password");
    password.type =
      password.type === "password" ? "text" : "password";
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="logo">
          <i className="fas fa-dumbbell"></i>
        </div>

        <h1>
          Fitness Challenge
          <br/>
          Community
        </h1>
          

        <p>
          Track your workouts, complete challenges,
          improve your health and stay motivated every day.
        </p>

        <div className="feature-list">
          <div className="feature">
            <i className="fas fa-fire"></i>
            <span>Daily Streaks</span>
          </div>

          <div className="feature">
            <i className="fas fa-trophy"></i>
            <span>Challenges</span>
          </div>

          <div className="feature">
            <i className="fas fa-heart"></i>
            <span>Healthy Lifestyle</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back</h2>

          <p>Login to continue your fitness journey.</p>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={togglePassword}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>

          <button
            className="login-btn"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
