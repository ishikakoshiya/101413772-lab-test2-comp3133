# Space-X Missions 

# Project Overview

This Angular application fetches and displays information about SpaceX launches using the SpaceX REST API. The app allows users to:

View a list of SpaceX missions.

Filter/search missions by launch year.

View detailed mission information.

Utilize Angular Material for UI enhancements.

# Features

Mission List: Displays flight details such as mission name, year, rocket details, and mission patch.

Mission Filter: Allows filtering missions by launch year.

Mission Details: Provides detailed information for a selected mission.

Data Fetching Service: A dedicated Angular service to fetch SpaceX launch data.

Angular Material: Enhances the UI with Material Design components.

# API Endpoints

The application fetches data from the SpaceX REST API:

All Launches: https://api.spacexdata.com/v3/launches

Filter by Launch Year: https://api.spacexdata.com/v3/launches?launch_year=YYYY

Mission Details: https://api.spacexdata.com/v3/launches/{flight_number}

Installation

Follow these steps to run the project locally:

# Prerequisites

Install Node.js (v14 or higher)

Install Angular CLI

Setup

# Clone the repository
git clone https://github.com//ishikakoshiya/101413772-lab-test2-comp3133.git

# Navigate to project folder
cd 101413772-lab-test2-comp3133

# Install dependencies
npm install

Running the Application

ng serve

Then, open http://localhost:4200 in a browser.

