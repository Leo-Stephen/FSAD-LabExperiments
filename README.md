# Lab Experiments Project

This repository contains a collection of lab experiments for Full Stack Web Development.

## Project Structure

- **LabExperiments**: ReactJS frontend application
- **LabExperimentS21-1**: Spring Boot backend application
- **Excercise1**: HTML/CSS exercises
- **Microservices**:
  - **eureka-server**: Service registry
  - **calc-service**: Calculation service
  - **user-service**: User service

## Setup Instructions

### Prerequisites

- Java 21
- Node.js and npm
- MySQL database

### Environment Configuration

1. Copy the `.env.example` file to `.env` and update with your credentials:
   ```bash
   cp .env.example .env
   ```

2. For Spring Boot applications, copy the example properties file:
   ```bash
   cp LabExperimentS21-1/src/main/resources/application-local.properties.example LabExperimentS21-1/src/main/resources/application-local.properties
   ```

3. Update the properties files with your database credentials and other configuration values.

### Running the Applications

#### Spring Boot Backend

```bash
cd LabExperimentS21-1
./mvnw spring-boot:run
```

#### React Frontend

```bash
cd LabExperiments
npm install
npm run dev
```

#### Microservices

Start the services in the following order:

1. Eureka Server:
   ```bash
   cd eureka-server
   ./mvnw spring-boot:run
   ```

2. Calculation Service:
   ```bash
   cd calc-service
   ./mvnw spring-boot:run
   ```

3. User Service:
   ```bash
   cd user-service
   ./mvnw spring-boot:run
   ```

## Security Notes

- Never commit sensitive information like API keys, passwords, or tokens to Git
- Use environment variables or properties files that are excluded from version control
- The `.env` file and `application-local.properties` files should never be committed to Git

## Available Experiments

- Experiment 2: Basic HTML/CSS Layout
- Experiment 3: Parent-Child Components
- Experiment 4: State Management
- Experiment 5: Event Handling
- Experiment 6: Users API
- Experiment 7: Weather API
- Experiment 9: Product Management
