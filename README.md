# Feedback Survey

To set up this app, you must install node modules, pg, and material-UI. You should also set up your database -- table information has been provided in the database.sql file. Once you've done those things, run your client and server. 

## Description

Duration: weekend project

This is a feedback survey app that allows the user to collect numerical and written feedback and store it in a database. An admin view gives the user the ability to easily view all submissions, as well as the option to delete. 


## Screenshot

![Feedback_App](public/images/review_feedback.jpeg?raw=true")

## Prerequisites

- Node.js
- React
- Material-UI
- Moment.js

## Installation

1. Create your database using the name: 'prime_feedback'
2. The queries in the data.sql file are set up to create the necessary table and populate a piece of starter data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install
4. Run npm install axios
5. Run npm install --save moment react-moment
4. Install Material-UI and the following plug ins: TextField, Button, Paper and Typography.
5. Run npm run server in your terminal
6. Run npm run client in your terminal
7. The npm run client command will open up a new browser tab for you!

## Usage

Survey takers will be asked for feedback on several points on a 1-5 scale, as well as an optional written comment. They have the option to edit their responses before submission. The form will not accept submissions with any mission information, and will alert the user to complete it. 

This app also overs an admin view, which displays a table of feedback collected, with most recent items first. Feedback items may be deleted from this view. The user will be prompted for confirmation before the request goes to the database. 

## Built With

- React
- PostgreSQL
- Node.js
- Express.js
- JavaScript
- HTML
- Moment.js
- JSX
- Material-UI

## Acknowledgement

Thanks to everyone at Prime Digital Academy who helped me gain the skills to build this app. 
