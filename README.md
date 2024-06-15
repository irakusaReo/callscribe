#callscribe

Overview

Callscribe is a Progressive Web App (PWA) designed for call center agents. It provides scripts for handling prospect and inbound calls, with a focus on products managed by admins. This application uses modern web technologies including React, Node.js, Express, and MongoDB.

Features

- User Authentication and Authorization: Secure login system with role-based access control (RBAC).
- Product and Script Management: Admins can add products and manage prospect and inbound scripts under each product.
- Call Type Selection: UI for agents to select call types (Prospect or Inbound).
- Prospect Call Handling: Interface for handling prospect calls with product selection and script display.
- Inbound Call Handling: Interface for handling inbound calls with product and problem selection, and script display.
- Teleprompter Display: Component for displaying scripts with agent input interfaces.

Technology Stack

- Frontend: React, React Router, Context API
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Deployment: Netlify (frontend), Heroku/AWS/DigitalOcean (backend)

Project Structure

callscribe
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── ...
├── package.json
├── README.md
└── ...

Installation

Prerequisites

- Node.js
- npm
- MongoDB

Backend Setup

1. Clone the repository:

git clone https://github.com/irakusaReo/callscribe.git
cd callscribe

2. Install backend dependencies:

cd server
npm install

3. Set up environment variables:
Create a .env file in the server directory and add the following:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

4. Start the backend server:

npm start

