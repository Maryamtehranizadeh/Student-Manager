# Student Manager Application

This is a React.js-based project for managing students and their associated courses. The application provides an interface to view, edit, and delete students and courses, as well as to add new entries. The interface is user-friendly and responsive.

## Features

- Add, edit, and delete student information.
- Manage courses by adding, editing, or deleting them.
- Display a list of students and courses.
- Clean and intuitive UI design.

## Prerequisites

To run this project, ensure you have Docker installed on your machine. If Docker is not installed, follow the instructions [here](https://docs.docker.com/get-docker/) to install it for your operating system.

## Running the Application

This project is containerized and can be run using Docker. Follow the steps below:

1. Pull the Docker image:
   ```bash
   docker pull maryamtehranizadeh/education-project:latest
   ```

## Run the Docker container:

```bash
Copy code
docker run -d -p 80:80 maryamtehranizadeh/education-project:latest
```

The application will now be running on port 80. You can access it via http://localhost or proxy it to any port you prefer.

For example, to proxy to port 8080:

```bash
Copy code
docker run -d -p 8080:80 maryamtehranizadeh/education-project:latest
```

## Application Access

Once the container is running, open your browser and navigate to:

http://localhost if using the default port 80.
http://localhost:<your-port> if using a custom port.

## Screenshot

Below is a screenshot of the application interface:

## Technical Details

Frontend Framework: React.js
Containerization: Docker
Port: 80 (default, can be proxied to any port)

## Feedback

If you encounter any issues or have suggestions, please contact Maryam Tehrani Zadeh.

Thank you for reviewing the project!
