// ----------------------------
// FITNESS CHALLENGE COMMUNITY
// script.js
// ----------------------------

// Workout Counter
let workoutCount = localStorage.getItem("workoutCount");

if (workoutCount === null) {
    workoutCount = 0;
} else {
    workoutCount = parseInt(workoutCount);
}

// Show workout count when Home page opens
window.onload = function () {

    let workout = document.getElementById("workout");

    if (workout) {
        workout.innerHTML = workoutCount;
    }

    // Show motivational quote if available
    let quote = document.getElementById("quote");

    if (quote) {

        let quotes = [
            "Stay Strong 💪",
            "Never Give Up 🔥",
            "Small Steps Every Day 🏃",
            "Fitness is a Lifestyle ❤️",
            "Push Yourself 🚴"
        ];

        let random = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = quotes[random];
    }
};

// Water Intake Counter
let water = 0;

function drinkWater() {
    water++;
    document.getElementById("waterCount").innerHTML = water + " Glasses";
}

let steps = 0;

function addSteps() {
    steps += 1000;
    document.getElementById("stepCount").innerHTML = steps;
}

// Challenge Progress
let progress = 0;

function updateProgress() {

    if (progress < 100) {
        progress += 10;
    }

    document.getElementById("progressBar").value = progress;
    document.getElementById("progressText").innerHTML = progress + "% Completed";

    if (progress == 100) {
        alert("🎉 Congratulations! Challenge Completed!");
    }
}


// ----------------------------
// LOGIN
// ----------------------------

function login() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (!email || !password) return;

    if (email.value == "" || password.value == "") {

        alert("Please enter Email and Password");

        return false;
    }

    alert("Login Successful!");

    window.location.href = "home page.html";

    return false;
}


// ----------------------------
// JOIN CHALLENGE
// ----------------------------

function joinChallenge() {

    alert("Congratulations! You joined the Fitness Challenge.");
}


// ----------------------------
// COMPLETE WORKOUT
// ----------------------------

function completeWorkout() {

    workoutCount++;

    localStorage.setItem("workoutCount", workoutCount);

    document.getElementById("workout").innerHTML = workoutCount;

    alert("Workout Completed Successfully!");
}


// ----------------------------
// LOGOUT
// ----------------------------

function logout() {

    let answer = confirm("Do you want to logout?");

    if (answer) {

        alert("Logged Out Successfully");

        window.location.href = "index.html";
    }
}