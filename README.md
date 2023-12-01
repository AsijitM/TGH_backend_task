# Task Management System

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Issues](https://img.shields.io/github/issues/yourusername/task-management-system)](https://github.com/yourusername/task-management-system/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yourusername/task-management-system)](https://github.com/yourusername/task-management-system/pulls)


[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/20354582-a5a2d987-e8b4-4834-a827-461a1b73ae72?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D20354582-a5a2d987-e8b4-4834-a827-461a1b73ae72%26entityType%3Dcollection%26workspaceId%3Dbc39cd26-7f32-4ef4-a99e-7ab7b8ab8696)

## Overview
A basic student management system API using ExpressJS which includes some interesting features mentioned below.

## Postman Documentation
https://documenter.getpostman.com/view/20354582/2s9YeHbWqD

## Deployed Link
https://student-admin-management.onrender.com

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## Installation

Provide instructions on how to install and set up the project. Include dependencies, environment setup, and any other necessary steps.

```bash
# Clone the repository
git clone https://github.com/yourusername/task-management-system.git

# Navigate to the project directory
cd task-management-system

# Install dependencies
npm install

# Run the server
npm start
```
##  Usage
1.  **Endpoints for Admin Panel and Student Interface:**
    
    -   The system provides distinct endpoints for both the Admin panel and the student interface.
2.  **Admin Panel:**
    
    -   **Admin Login:**
        
        -   Admins can log in to access the admin panel securely.
    -   **Add Students:**
        
        -   Admins can add students with their name, email ID, department, and password.
    -   **Assign Tasks:**
        
        -   Admins can assign tasks to students with due times.
3.  **Student Interface:**
    
    -   **Student Login:**
        
        -   Students can log in securely to access their interface.
    -   **View Assigned Tasks:**
        
        -   Students can view the tasks assigned to them.
    -   **Task Status:**
        
        -   Students can check the status of each task (pending, overdue, completed).
    -   **Change Task Status:**
        
        -   Students have the option to change the status of tasks to "completed."



## API Endpoints

List and describe the key API endpoints. Include example requests and responses where applicable.

-   **Common Login Endpoint**
    
    -   **Endpoint:** `POST /login`
    -   **Description:** Handles both admin and student logins.
-   **Admin Panel**
    
    -   **Endpoint:** `POST /admin/assign_task`
    -   **Description:** Assigns a task to a specific student.
-   **Student Interface**
        
    -   **Endpoint:** `GET /student/:studentId`
        
    -   **Description:** Retrieves tasks assigned to a specific student.
        
    -   **Endpoint:** `PUT /student/update_task_status`
        
    -   **Description:** Updates the status of a task for a specific student.
## Database Schema

Include the database schema and any relevant information about your data models.

```bash
// Student Schema
const studentSchema = new mongoose.Schema({
  name:  String,
  email:  {  type:  String,  unique:  true  },
  department:  String,
  password:  String,
  role:  {  type:  String,  default:  'student'  },
});

// Task Schema
   const taskSchema = new mongoose.Schema({
   taskName:  String,
   dueTime:  Date,
   assignedTo:  {  type: mongoose.Schema.Types.ObjectId,  ref:  'Student'  },
   status:  {
    type:  String,
    enum:  ['pending',  'overdue',  'completed'],
    default:  'pending',
    },
});
```


## Environment Variables

Create a `.env` file in the root of the project with the following environment variables:

```env

# Admin authentication Credentials

ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=admin


