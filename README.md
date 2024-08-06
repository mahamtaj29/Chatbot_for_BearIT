# BearBot Chat Application

BearBot is a React-based chat application featuring a chatbot that provides information about various topics such as About Us, Courses, and FAQs. The application uses a typewriter effect for messages and includes Tailwind CSS for styling. This project also integrates with an API to fetch bot responses.



## Live Demo

Check out the live demo on Vercel: [BearIT Chatbot app](https://chatbot-for-bear-it.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Styling](#styling)

## Features

- Chatbot interface for user interaction.
- Typewriter effect for displaying messages.
- Fetch and display information about About Us, Courses, and FAQs.
- Tailwind CSS for responsive and modern UI design.

## Installation

1. **Clone the repository:**
2. **Install dependencies:**
3. **Set up environment variables:**
    Create a `.env` file in the root of your project and add the following:
    NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
4. **Start the development server:**
5. **Open the application:**
    Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Chat with BearBot:**
    - Start typing your messages in the input box and click "Send".
    - BearBot will respond based on the input provided.
- **View Information:**
    - Click on the buttons for "About Us", "Courses", and "FAQs" to view more details.
    - Use the provided back buttons to navigate.

## Components

### ChatBot

- Main component managing the chat interface and state.
- Displays the chat messages and input box.
- Handles message sending and API response fetching.

### TypewriterMsg

- Displays messages with a typewriter effect.
- Accepts text and pace as props to control the speed of the effect.

### AboutUs

- Fetches and displays information about the organization.
- Provides a button to toggle detailed view.

### Courses

- Fetches and displays information about available courses.
- Allows users to select a course to view more details.

### FAQ

- Fetches and displays frequently asked questions.
- Provides a button to toggle detailed view.

### AddRequest

- Provides a form for users to add new requests or inquiries.

## API Integration

- The application uses an API to fetch chatbot responses.
- The `getBotResponse` function sends a POST request to the API with the user input.
- The API key for the Google API is stored in environment variables.

## Styling

- Tailwind CSS is used for styling the application.
- Custom colors and styles are defined in the `tailwind.config.js` file.
- Utility classes are used for layout, spacing, typography, and hover effects.


