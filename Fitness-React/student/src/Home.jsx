import "./Home.css";
import image11 from "./assets/image11.jpg";
import image22 from "./assets/image22.jpg";
import { useState } from "react";

function Home() {

  const [workout, setWorkout] = useState(0);
  const [points, setPoints] = useState(0);
  const [water, setWater] = useState(0);
  const [steps, setSteps] = useState(0);
  const [progress, setProgress] = useState(0);
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-dumbbell"></i>
          <span>FitChallenge</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#workout">Workouts</a></li>
          <li><a href="#leaderboard">Leaderboard</a></li>
          <li><a href="#nutrition">Nutrition</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="logout-btn">Logout</button>
      </nav>

      {/* Hero Section */}
      <section class="hero">

    <div class="hero-content">

        <h1 id="welcomeUser">
            Welcome to Fitness Challenge Community
        </h1>

        <p>

            Build healthy habits, track workouts,
            earn challenge points and stay motivated
            every single day.

        </p>

        <button class="join-btn"
        onclick="joinChallenge()">

            Join Challenge

        </button>

    </div>

</section>

<h3 id="quote"></h3>
      {/* ================= DASHBOARD ================= */}

<section className="dashboard">
  <h2>Dashboard Overview</h2>

  <div className="card-container">

    <div className="card">
      <i className="fas fa-fire"></i>
      <h3>Workout Streak</h3>
      <h1>21 Days</h1>
    </div>

    <div className="card">
      <i className="fas fa-dumbbell"></i>
      <h3>Total Workouts</h3>
      <h1>{workout}</h1>
    </div>

    <div className="card">
      <i className="fas fa-trophy"></i>
      <h3>Challenge Points</h3>
      <h1>{points}</h1>
    </div>

    <div className="card">
      <i className="fas fa-heart"></i>
      <h3>Calories Burned</h3>
      <h1>3250</h1>
    </div>

  </div>
</section>

{/* ================= WORKOUT TRACKER ================= */}

<section className="dashboard-section" id="workout">

  <h2>Workout Tracker</h2>

  <div className="card-container">

    <div className="card">

      <h3>Today's Workout</h3>

      <p>Complete your daily workout to increase your streak.</p>

      <button
        className="action-btn"
        onClick={() => setWorkout(workout + 1)}
      >
        Complete Workout
      </button>

    </div>

    <div className="card">

      <h3>Water Intake</h3>

      <h1>{water}</h1>

      <button
        className="action-btn"
        onClick={() => setWater(water + 1)}
      >
        Drink Water
      </button>

    </div>

    <div className="card">

      <h3>Daily Steps</h3>

      <h1>{steps}</h1>

      <button
        className="action-btn"
        onClick={() => setSteps(steps + 1000)}
      >
        Add 1000 Steps
      </button>

    </div>

  </div>

</section>

{/* ================= PROGRESS ================= */}

<section className="dashboard-section">

  <h2>Your Challenge Progress</h2>

  <div className="progress-card">

    <p>Challenge Completion</p>

    <progress value={progress} max="100"></progress>

    <p>{progress}% Completed</p>

    <button
      className="action-btn"
      onClick={() =>
        setProgress(progress < 100 ? progress + 10 : 100)
      }
    >
      Update Progress
    </button>

  </div>

</section>

{/* ================= QUICK ACTIONS ================= */}

<section className="dashboard-section">

  <h2>Quick Actions</h2>

  <div className="card-container">

    <div className="card">
      <i className="fas fa-trophy fa-2x"></i>

      <h3>Earn Points</h3>

      <button
        className="action-btn"
        onClick={() => setPoints(points + 10)}
      >
        +10 Points
      </button>
    </div>

    <div className="card">
      <i className="fas fa-moon fa-2x"></i>

      <h3>Dark Mode</h3>

      <button
        className="action-btn"
        onClick={() =>
          document.body.classList.toggle("dark-mode")
        }
      >
        Toggle Theme
      </button>
    </div>

    <div className="card">
      <i className="fas fa-right-from-bracket fa-2x"></i>

      <h3>Logout</h3>

      <button
        className="action-btn"
        onClick={() => alert("Logged Out")}
      >
        Logout
      </button>
    </div>

  </div>

</section>

{/* ================= LEADERBOARD ================= */}

<section className="dashboard-section" id="leaderboard">

  <h2>Leaderboard</h2>

  <table className="leaderboard">

    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Points</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>1</td>
        <td>Arun</td>
        <td>1200</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Priya</td>
        <td>1100</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Rahul</td>
        <td>980</td>
      </tr>

      <tr>
        <td>4</td>
        <td>Sneha</td>
        <td>910</td>
      </tr>

    </tbody>

  </table>

</section>

{/* ================= PROGRESS PHOTOS ================= */}

<section className="dashboard-section">

  <h2>Progress Photos</h2>

  <div className="card-container">

    <div className="card">
      <img
        src={image11}
        alt="Before" width="200"
        className="progress-image"
      />

      <h3>Before Challenge</h3>
    </div>

    <div className="card">
      <img
        src={image22}
        alt="After" width="200"
        className="progress-image"
      />

      <h3>After Challenge</h3>
    </div>

  </div>

</section>

{/* ================= NUTRITION ================= */}

<section className="dashboard-section" id="nutrition">

  <h2>Nutrition Tracker</h2>

  <div className="card-container">

    <div className="card">
      <h3>Calories</h3>
      <p>2200 kcal</p>
    </div>

    <div className="card">
      <h3>Protein</h3>
      <p>140 g</p>
    </div>

    <div className="card">
      <h3>Carbohydrates</h3>
      <p>260 g</p>
    </div>

    <div className="card">
      <h3>Water Goal</h3>
      <p>8 Glasses</p>
    </div>

  </div>

</section>

{/* ================= TRAINERS ================= */}

<section className="dashboard-section">

  <h2>Trainer Programs</h2>

  <div className="card-container">

    <div className="card">
      <h3>Weight Loss</h3>
      <p>8 Week Beginner Program</p>
    </div>

    <div className="card">
      <h3>Muscle Building</h3>
      <p>12 Week Strength Program</p>
    </div>

    <div className="card">
      <h3>Cardio Fitness</h3>
      <p>Improve Endurance & Heart Health</p>
    </div>

  </div>

</section>

{/* ================= CONTACT ================= */}

<section className="dashboard-section" id="contact">

  <h2>Contact Us</h2>

  <div className="card">

    <p><strong>Email:</strong> fitchallenge@email.com</p>

    <p><strong>Phone:</strong> +91 98765 43210</p>

    <p><strong>Location:</strong> Coimbatore, Tamil Nadu</p>

  </div>

</section>

{/* ================= FOOTER ================= */}

<footer>

  <p>© 2026 Fitness Challenge Community</p>

</footer>
    </>
  );
}

export default Home;