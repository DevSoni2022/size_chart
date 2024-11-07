# Power Analytics Dashboard

This is a React-based dashboard application that visualizes power consumption data. It includes various components for displaying the current power usage, average power consumption trends, and specific appliance consumption details. The dashboard is designed for desktop and features a clean, modern interface with charts and dynamic data.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Built With](#built-with)

## Getting Started

Follow these instructions to set up the project on your local machine for development purposes.

## Prerequisites

Ensure that you have the following software installed:

- **Node.js** (v12 or higher) - For running the development server and building the project.
- **npm** or **yarn** - Package managers used for installing dependencies.

## Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-name>



npm install
# or
yarn install



npm start
# or
yarn start



/src
  /components
    Dashboard.js           # Main dashboard component
    PowerConsumption.js    # Component displaying the power consumption with a circular progress chart
    LineChart.js           # Component displaying average power consumption trends using a line chart
  /styles
    Dashboard.css          # Styles for the main dashboard layout
    PowerConsumption.css   # Styles for the PowerConsumption component
    LineChart.css          # Styles for the LineChart component
App.js                     # Root component of the application
index.js                   # Entry point for rendering the app
