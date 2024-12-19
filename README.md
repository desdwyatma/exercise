# Exercise Repository

## Prerequisites and Installation
1. Ensure you have **Node.js** installed on. You can download it from [Node.js Official Website](https://nodejs.org/).
2. Clone the repository: [https://github.com/desdwyatma/exercise](https://github.com/desdwyatma/exercise).
3. Go to project root directory (`exercise`), type `npm install` to install all dependencies.

## Running Tests
For Windows users, you can execute the test cases by running the following command:
```cmd
npm run test-api
```

Alternatively, if you want to run specific tests, you can use:
```cmd
npm run test-api -- "--grep" "@available-tagging"
```

## Test Cases

### Login
- **As a User**, I should be able to Login with valid request parameter.
- **As a User**, I should not be able to Login with an invalid user email.
- **As a User**, I should not be able to Login with the email field is empty.
- **As a User**, I should not be able to Login with missing email field.
- **As a User**, I should not be able to Login with the password field is empty.
- **As a User**, I should not be able to Login with missing password field.
- **As a User**, I should not be able to Login with empty request body.
- **As a User**, I should not be able to Login with invalid HTTP method.

### Register
- **As a User**, I should be able to Register with valid request to parameter.
- **As a User**, I should not be able Register with the email field is empty.
- **As a User**, I should not be able Register with missing email field.
- **As a User**, I should not be able Register with the password field is empty.
- **As a User**, I should not be able Register with missing password field.
- **As a User**, I should not be able Register with empty request body.
- **As a User**, I should not be able Register with invalid HTTP method.

### Password Reset
- **As a User**, I should be able to get Resource List with valid request parameter.
- **As a User**, I should be able to get Resource List only one resource with valid request parameter.
- **As a User**, I should not be able to get Resource List with list of data does not exist.
- **As a User**, I should not be able to get Resource List with invalid HTTP method.
