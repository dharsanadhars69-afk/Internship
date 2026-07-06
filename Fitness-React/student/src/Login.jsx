import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faDumbbell,
  faFire,
  faTrophy,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter the email");
      return;
    }

    if (!password.trim()) {
      setError("Please enter the password");
      return;
    }

    setError("");
    alert("Login Successful!");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <FontAwesomeIcon icon={faDumbbell} />
        </div>

        <h1>
          Fitness Challenge
          <br />
          Community
        </h1>

        <p>
          Track your workouts, complete challenges,
          improve your health and stay motivated every day.
        </p>

        <div className="feature-list">
          <div className="feature">
            <FontAwesomeIcon icon={faFire} />
            <span>Daily Streaks</span>
          </div>

          <div className="feature">
            <FontAwesomeIcon icon={faTrophy} />
            <span>Challenges</span>
          </div>

          <div className="feature">
            <FontAwesomeIcon icon={faHeart} />
            <span>Healthy Lifestyle</span>
          </div>
        </div>
      </div>

      <div className="login-right">
        <form className="login-box" onSubmit={login}>
          <h2>Welcome Back</h2>
          <p>Login to continue your fitness journey.</p>

          {error && <p className="error-msg">{error}</p>}

          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <label htmlFor="password">Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;