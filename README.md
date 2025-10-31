🧑‍🎓 Student Record API

A simple RESTful API built using Node.js, Express, and MongoDB to manage student records efficiently.
This project demonstrates CRUD (Create, Read, Update, Delete) operations and can be used as a foundation for learning backend development.

🚀 Features

Add new student records

View all students

Update student details

Delete a student

Connected to MongoDB using Mongoose

Well-structured routes and modular code

🛠️ Tech Stack

Node.js – JavaScript runtime environment

Express.js – Web framework for building APIs

MongoDB – NoSQL database for storing records

Mongoose – ODM for MongoDB

Nodemon (for development)

📁 Project Structure

STUDENT-RECORD/

│

├── server.js              # Entry point of the app

├── package.json           # Project dependencies and scripts

├── config/

│  
└── db.js              # MongoDB connection

├── models/

│
└── Student.js         # Mongoose schema

├── routes/

│
└── studentRoutes.js   # Express routes

└── README.md              # Project documentation

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/dev-manisha-01/STUDENT-RECORD.git
cd STUDENT-RECORD


Install dependencies

npm install


Set up environment variables
Create a .env file in the root folder:

MONGO_URI = your_mongodb_connection_string
PORT = 5000


Start the server

npm run dev


(Uses nodemon for live reload)

🧪 API Endpoints

Method	Endpoint	Description
GET	/students	Get all students
POST	/students	Add a new student
PUT	/students/:id	Update student by ID
DELETE	/students/:id	Delete student by ID
📬 Example Request (POST)

{
  "name": "Aman Kumar",
  "course": "Computer Science",
  "age": 21,
  "city": "Delhi"
}

🧠 Learning Goals

Understanding REST API architecture

Connecting Express with MongoDB

Handling CRUD operations

Structuring backend code professionally

💡 Future Improvements

Add authentication (JWT)

Create a frontend for managing records

Input validation using Joi or express-validator# Student-Record-API
The Student Record API is a simple backend project built with Node.js, Express, and MongoDB. It manages student information such as name, course, age, and city, providing basic CRUD operations to add, view, update, and delete student records. This project helps beginners learn how to build and organize RESTful APIs.
