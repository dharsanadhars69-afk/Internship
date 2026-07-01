// ===============================
// Fitness Challenge Community
// script.js
// ===============================

// ---------- LOGIN ----------
function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter Email and Password.");
        return;
    }

    localStorage.setItem("user", email);

    alert("Login Successful!");

    window.location.href = "home.html";
}

// ---------- SHOW / HIDE PASSWORD ----------
function togglePassword() {

    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

// ---------- WELCOME USER ----------
window.onload = function () {

    let user = localStorage.getItem("user");

    if (document.getElementById("welcomeUser")) {

        if (user) {
            document.getElementById("welcomeUser").innerHTML =
                "Welcome, " + user;
        }

    }

};

// ---------- JOIN CHALLENGE ----------
function joinChallenge() {

    alert("Congratulations!\nYou have joined the Fitness Challenge.");

}

// ---------- WORKOUT COUNTER ----------
let workout = 0;

function completeWorkout() {

    workout++;

    document.getElementById("workout").innerHTML = workout;

}

// ---------- WATER TRACKER ----------
let water = 0;

function drinkWater() {

    water++;

    document.getElementById("water").innerHTML = water;

}

// ---------- STEP COUNTER ----------
let steps = 0;

function addSteps() {

    steps += 1000;

    document.getElementById("steps").innerHTML = steps;

}

// ---------- CHALLENGE POINTS ----------
let points = 0;

function earnPoints() {

    points += 10;

    document.getElementById("points").innerHTML = points;

}

// ---------- PROGRESS BAR ----------
let progress = 0;

function increaseProgress() {

    if (progress < 100) {

        progress += 10;

        document.getElementById("progressBar").value = progress;

        document.getElementById("progressText").innerHTML =
            progress + "%";

    }

}

// ---------- DARK MODE ----------
function darkMode() {

    document.body.classList.toggle("dark-mode");

}

// ---------- LOGOUT ----------
function logout() {

    if (confirm("Do you want to Logout?")) {

        localStorage.removeItem("user");

        window.location.href = "index.html";

    }

}