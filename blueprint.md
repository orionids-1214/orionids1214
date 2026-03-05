# Blueprint: YouTube Recipe Extractor

## Overview

This application allows users to paste a YouTube video URL and extract the recipe and ingredients from it. The app will have a clean, modern interface for inputting the URL and displaying the extracted information in a structured and easy-to-read format.

## Style and Design

*   **Layout:** A centered, single-column layout that is responsive and works well on both mobile and desktop screens.
*   **Color Palette:** A vibrant and energetic color scheme will be used.
*   **Typography:** Expressive and clear typography will be used to create a hierarchy for titles, headings, and body text.
*   **Iconography:** Icons will be used to enhance user understanding and navigation.
*   **Interactivity:** Interactive elements like buttons and input fields will have a modern look and feel with subtle animations and shadow effects.
*   **Background:** A subtle texture will be applied to the background to give the app a premium feel.

## Features

*   **YouTube URL Input:** A text field where users can paste the YouTube video link.
*   **Recipe Extraction Button:** A button to initiate the recipe extraction process.
*   **Loading State:** A visual indicator to show that the application is processing the video.
*   **Recipe Display:** A dedicated component to display the extracted recipe, including:
    *   Video Title
    *   Thumbnail Image (placeholder)
    *   List of Ingredients
    *   Step-by-step Instructions
*   **Web Components:** The application will be built using modern web standards, including a custom `<recipe-card>` element to encapsulate the recipe display logic and styling.

## Current Plan

*   **HTML:**
    *   Update `index.html` to create the main structure for the YouTube Recipe Extractor.
    *   Add a title, a form with a URL input field, and a submit button.
    *   Add a container where the extracted recipe will be displayed.
*   **CSS:**
    *   Rewrite `style.css` to style the new application.
    *   Implement a modern and responsive design with a new color palette, typography, and interactive styles.
    *   Remove all styles related to the previous Lotto Number Generator app.
*   **JavaScript:**
    *   Rewrite `main.js` to implement the recipe extraction logic.
    *   Add an event listener to the form submission.
    *   Create a `<recipe-card>` web component to display the recipe details.
    *   Simulate the extraction process and display a sample recipe when the user submits a URL.
