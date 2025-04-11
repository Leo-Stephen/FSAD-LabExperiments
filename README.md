# Full Stack Web Development Lab Experiments

This repository contains a comprehensive collection of lab experiments for Full Stack Web Development, showcasing various technologies and concepts including React.js, Spring Boot, and microservices architecture.

## Project Overview

This project is a learning platform that demonstrates progressive web development concepts through a series of experiments. It includes:

- Frontend development with React.js
- Backend development with Spring Boot
- RESTful API design and implementation
- Microservices architecture with Eureka service discovery
- Load balancing between services
- Database integration with MySQL
- Authentication using JWT
- State management in React
- Component-based architecture

## Project Structure

### Frontend

- **LabExperiments**: A React.js application built with Vite that contains multiple experiments demonstrating various frontend concepts.
  - Uses modern React with hooks and functional components
  - Implements component-based architecture
  - Demonstrates state management techniques
  - Includes API integration with backend services
  - Features responsive design principles

### Backend

- **LabExperimentS21-1**: A Spring Boot application that serves as the main backend for the experiments.
  - Implements RESTful APIs
  - Provides JWT-based authentication
  - Connects to MySQL database
  - Handles data persistence and business logic
  - Includes controllers for various experiments

### Microservices

- **eureka-server**: Service registry built with Spring Cloud Netflix Eureka.

  - Enables service discovery for microservices
  - Provides a dashboard to monitor registered services
  - Runs on port 8761

- **calc-service**: Calculation microservice that performs mathematical operations.

  - Registers with Eureka server
  - Exposes REST endpoints for calculations
  - Can be scaled horizontally for load balancing
  - Runs on port 8081

- **user-service**: User management microservice with load balancing capabilities.
  - Uses Spring Cloud LoadBalancer
  - Communicates with calc-service through service discovery
  - Demonstrates client-side load balancing
  - Runs on port 8082

### Basic Web Development

- **Exercise1**: Contains basic HTML/CSS exercises demonstrating fundamental web concepts.

## Detailed Experiment Descriptions

### Experiment 1: HTML/CSS Fundamentals

Implementing grid, flex, and block display techniques for fundamental web layouts.

### Experiment 2: Responsive Design

Development of responsive frontend for system and mobile views using media queries and flexible layouts.

### Experiment 3: React Props and State

Working with React props and state to manage component data and interactions between components.

### Experiment 4: Single Page React App with Redux

Implementation of multiple components as a "Single Page React App" with Redux State Management for Routing.

### Experiment 5: UI Frameworks

Utilizing predefined responsive design elements with Bootstrap / Material-UI for designing consistent and professional interfaces.

### Experiment 6: API Integration

Transferring (Sending and Receiving) data with Axios / Fetch API in React applications.

### Experiment 7: Spring Boot Web MVC

Demonstrating Spring Boot Web MVC framework with annotations for building web applications.

### Experiment 8: Spring Boot REST API

Implementing REST API with CRUD operations using Spring Boot and JPA repositories.

### Experiment 9: Spring Boot with ReactJS Integration

Implements a full-stack product management system with React frontend and Spring Boot backend.

### Experiment 10: Authentication and Role-Based Access

**Note: Already implemented in the JobPortal main project.**

Implementing Authentication and Role-Based Access Control (RBAC) for secure user management. This experiment demonstrates how to implement user authentication, authorization, and role-based permissions in a web application.

### Experiment 11: JWT Authentication

Implementing JWT Tokens with encryption and decryption for secure authentication between client and server.

### Experiment 12: Microservices Architecture

Implementing Microservices and Load Balancing with Spring Cloud and Netflix Eureka for scalable applications.

## Setup Instructions

### Prerequisites

- Java 21 or higher
- Node.js 18 or higher and npm
- MySQL 8.0 or higher
- Maven (or use the included Maven wrapper)
- Git

### Database Setup

1. Create a MySQL database named `labexes21`:

   ```sql
   CREATE DATABASE labexes21;
   ```

2. The application uses Hibernate's auto-ddl feature to create tables automatically.

### Environment Configuration

1. Copy the `.env.example` file to `.env` and update with your credentials:

   ```bash
   cp .env.example .env
   ```

2. For Spring Boot applications, copy the example properties file:

   ```bash
   cp LabExperimentS21-1/src/main/resources/application-local.properties.example LabExperimentS21-1/src/main/resources/application-local.properties
   ```

3. Update the properties files with your database credentials and other configuration values:

   ```properties
   # In application-local.properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

4. Set environment variables for JWT and encryption (or use the .env file):
   ```bash
   export DB_USERNAME=your_username
   export DB_PASSWORD=your_password
   export JWT_SECRET=your_jwt_secret_key
   export ENCRYPTION_KEY=your_encryption_key
   ```

### Running the Applications

#### Spring Boot Backend

```bash
cd LabExperimentS21-1
chmod +x mvnw    # Make the Maven wrapper executable (if needed)
./mvnw spring-boot:run
```

The backend will be available at http://localhost:8080

#### React Frontend

```bash
cd LabExperiments
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

#### Microservices

Start the services in the following order:

1. Eureka Server:

   ```bash
   cd eureka-server
   chmod +x mvnw    # Make the Maven wrapper executable (if needed)
   ./mvnw spring-boot:run
   ```

   The Eureka dashboard will be available at http://localhost:8761

2. Calculation Service:

   ```bash
   cd calc-service
   chmod +x mvnw    # Make the Maven wrapper executable (if needed)
   ./mvnw spring-boot:run
   ```

   To run a second instance for load balancing:

   ```bash
   cd calc-service
   ./mvnw spring-boot:run -Dserver.port=8083
   ```

3. User Service:
   ```bash
   cd user-service
   chmod +x mvnw    # Make the Maven wrapper executable (if needed)
   ./mvnw spring-boot:run
   ```

### Testing the Microservices

To test the microservices and load balancing:

1. Access the Eureka dashboard at http://localhost:8761 to verify all services are registered.

2. Make a request to the user service, which will forward it to the calculation service:

   ```bash
   curl "http://localhost:8082/user/calculate?a=5&b=10"
   ```

3. The response should show: "The sum calculated by calc-service is: 15"

4. Make multiple requests to observe load balancing between calc-service instances.

## API Documentation

### Main Backend APIs

#### Product Management API

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/{id}` - Update a product
- `DELETE /api/products/{id}` - Delete a product

#### JWT Authentication API

- `GET /api/token?username=<username>` - Generate a JWT token
- `GET /api/validate?token=<token>` - Validate a JWT token

### Microservice APIs

#### Calculation Service

- `GET /calc/add?a=<num1>&b=<num2>` - Add two numbers

#### User Service

- `GET /user/calculate?a=<num1>&b=<num2>` - Forward calculation request to calc-service

## Technologies Used

### Frontend

- React.js 18+
- Vite
- React Router
- Axios for API calls
- CSS for styling

### Backend

- Spring Boot 3
- Spring Data JPA
- Spring Security
- JWT for authentication
- MySQL for database

### Microservices

- Spring Cloud
- Netflix Eureka for service discovery
- Spring Cloud LoadBalancer
- RESTful API design

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
