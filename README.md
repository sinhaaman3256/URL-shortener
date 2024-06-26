# URL Shortener

![Project Screenshot](image.png)

A simple and elegant URL shortener web application built using Node.js, Express, and MongoDB. The application allows users to shorten long URLs and keep track of the number of clicks on each shortened URL.

## Features

- **Shorten URLs:** Convert long URLs into short, easy-to-share links.
- **Click Tracking:** Monitor and display the number of clicks on each shortened URL.
- **Delete URLs:** Remove shortened URLs when they are no longer needed.
- **Responsive UI:** Designed with a modern glassmorphism style for a sleek user experience.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing shortened URLs and click data.
- **EJS (Embedded JavaScript templates):** Templating engine for generating HTML markup.
- **Bootstrap:** Front-end framework for responsive design and UI components.
- **Font Awesome:** Library of scalable vector icons.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/sinhaaman3256/url-shortener.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd url-shortener
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```

## Usage

1. **Start the server:**
    ```sh
    node server.js
    ```
2. **Open your browser and go to:** `http://localhost:5000`

## Project Structure

The project structure is organized as follows:

- **`server.js`**: Main server file that initializes and runs the Node.js application.
- **`public/`**: Directory for static assets such as CSS stylesheets and client-side JavaScript files.
- **`views/`**: Contains EJS templates used for rendering dynamic HTML pages.
- **`controllers/`**: Houses route handlers that manage HTTP requests and responses.
- **`models/`**: Contains MongoDB models for defining data schema and interacting with the database.
- **`README.md`**: This file, containing project documentation and instructions.

