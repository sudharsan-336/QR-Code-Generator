# QR Code Generator

## Overview
The **QR Code Generator** is a simple, **mobile-responsive** web-based application that allows users to generate QR codes instantly from text or URLs. It provides a clean user interface and uses an external API to dynamically create QR codes across both mobile and desktop devices.

## Live Demo
**View Website :** https://qr-code-generator-dev.vercel.app/

## Features
### Input Handling
- Accepts text or URL input from the user
- Validates empty input with a visual error animation

### QR Code Generation
- Generates QR codes dynamically using an external API
- Displays the QR code instantly on button click

### User Interface
- Clean and modern design
- Mobile-responsive layout for smartphones, tablets, and desktops
- Smooth animation when displaying the QR code
- Error shake effect for invalid input

## Technologies Used
- **HTML5** → Structure of the web page
- **CSS3** → Styling, responsive layout, and animations
- **JavaScript** → Logic and interactivity
- **QR Code API** → Generates QR images
👉 https://api.qrserver.com/v1/create-qr-code/

## Project Structure
```text
│
├── index.html          # Main structure of the application
├── style.css           # Styling, responsive design, and animations
├── script.js           # Handles QR code generation and input validation
└── README.md           # Project documentation
```

## Software Requirements
- Any modern web browser (**Chrome, Edge, Firefox, etc.**)
- Code editor (**VS Code recommended**)

## How It Works
1. User enters text or a URL
2. On clicking **Generate QR Code**:
   - If input is valid → QR code is generated and displayed
   - If input is empty → Input box shakes as an error indication

## How to Run the Project
1. Download or clone the project
2. Open the project folder
3. Run the **index.html** file in your browser