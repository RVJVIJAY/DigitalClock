# 🕒 Digital Clock Project

## 📖 Overview

The **Digital Clock** is a responsive web application developed using **React** and powered by **Vite**. It dynamically displays the current time with automatic updates every second, utilizing JavaScript's `Date` object to fetch and format the time. The clock is styled using CSS to provide a clean and minimalist interface.

## ✨ Features

- **Real-Time Clock**: Displays the current time (hours, minutes, seconds) and updates every second.
- **12-Hour / 24-Hour Format**: Supports both 12-hour and 24-hour time formats.
- **Responsive Design**: Adaptable to different screen sizes and devices.
- **Minimalist UI**: Clean and modern design for better readability.

## 🛠️ Technologies Used

- **React**: For building the UI and managing the state of the clock.
- **Vite**: Fast and optimized build tool for React projects.
- **JavaScript**: To handle time fetching logic.
- **CSS**: For styling the clock and ensuring a responsive layout.

## 🚀 Getting Started

### Prerequisites

Ensure that you have the following installed on your system:
- **Node.js** (version 14 or later)
- **npm** (Node Package Manager) or **yarn** (alternative package manager)

## 🔧 Installation

Follow the steps below to install and run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RVJVIJAY/DigitalClock.git

2.**Navigate to the project directory** ./clock
3.**install dependencies using npm or yarn:** npm i
4.**Start the development server:** npm run dev
5.**Open the app in your browser:**
     Once the development server is running, open http://localhost:5173 to view the application in your browser.

📋 Usage
.Open the app in your web browser.
.The clock will display the current time in real-time, updating every second.
.Toggle between 12-hour and 24-hour formats using the toggle button (if implemented).
.The clock will automatically adjust to your system's local time.

🖥️ Key Concepts
.React Hooks: Uses useState to store the current time and useEffect to update the time every second.
.Real-Time Update: The setInterval method updates the displayed time every 1000 milliseconds (1 second).
.Time Formatting: A toggle allows switching between 12-hour and 24-hour time formats.
