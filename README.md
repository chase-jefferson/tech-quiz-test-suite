# Tech Quiz: Cypress Testing Suite

## Description
This project is a fully functional Tech Quiz application built using the MERN stack. The app allows users to take a quiz with ten randomly selected questions and view their final score. The primary goal of this project is to implement Cypress for both component and end-to-end testing to ensure the reliability and robustness of the application.

## User Story
```md
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

## Acceptance Criteria
```md
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```

## Features
- Start the quiz with a randomly selected set of questions
- Answer questions and receive immediate feedback
- View final score at the end of the quiz
- Restart the quiz after completion
- Cypress component and end-to-end tests to ensure functionality

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd tech-quiz
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run server
   ```
4. Start the development server:
   ```sh
   npm run start:dev
   ```
## Running Tests
1. Install Cypress as a dev dependency:
   ```sh
   npm install cypress --save-dev
   ```
2. Open Cypress Test Runner:
   ```sh
   npx cypress open
   ```
3. Run tests via Cypress Test Runner.

5. Run e2e testing from terminal:
   ```sh
   npm run test
   ```

## Video Demonstration
Watch the demo of the application and testing process: [Video Demonstration](https://drive.google.com/file/d/1Y1MgQe0FV6VYX40o4g-1McuoA9oKM0ys/view?usp=drive_link)

## Technologies Used
- React
- Node.js
- Express.js
- MongoDB
- Cypress

