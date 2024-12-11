# Hyrax Oil Website

This repository hosts the source code for the Hyrax Oil website, built with ReactJS and deployed via GitHub Pages. The website serves as an informational platform for Hyrax Oil, showcasing products, services, and company details.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

The Hyrax Oil website is designed to provide a modern, user-friendly interface for customers and stakeholders. It features product information, company details, and dynamic content to engage users.

---

## Features

- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Interactive UI:** Engaging animations and transitions using Framer Motion.
- **Product Showcase:** Highlights Hyrax Oil's products and services.
- **React Router Integration:** Enables smooth navigation across multiple pages.

---

## Technologies Used

- **Frontend Framework:** ReactJS
- **CSS Preprocessor:** SCSS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- A GitHub account

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/hazimdanishhh/hyrax-oil.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hyrax-oil
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the site.

---

## Deployment

The website is deployed using GitHub Pages. To deploy updates:

### Steps

1. Ensure the `homepage` field in `package.json` is correctly set:

   ```json
   "homepage": "https://hazimdanishhh.github.io/hyrax-oil/"
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

4. Verify the site at: [https://hazimdanishhh.github.io/hyrax-oil/](https://hazimdanishhh.github.io/hyrax-oil/)

---

## Troubleshooting

### Common Issues

1. **404 Errors on GitHub Pages:**

   - Ensure the `homepage` field in `package.json` is correctly configured.
   - Use `HashRouter` instead of `BrowserRouter` in `react-router-dom`.

   Example:

   ```jsx
   import { HashRouter as Router } from "react-router-dom";

   <Router>
     <App />
   </Router>;
   ```

2. **Assets Not Loading:**

   - Place static assets in the `public` folder and reference them with absolute paths.
   - Example:
     ```scss
     background-image: url("/power-line.jpg");
     ```

3. **Build Errors:**
   - Ensure all dependencies are installed correctly.
   - Clear npm cache and reinstall dependencies:
     ```bash
     npm cache clean --force
     npm install
     ```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or issues, please contact [Hazim Danish](https://github.com/hazimdanishhh).
