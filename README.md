# Ultralink URL Shortener

Ultralink is a robust URL shortening service built with NestJS, designed to efficiently transform long URLs into concise, manageable links. It features user authentication, allowing users to register, log in, and manage their shortened URLs. The application integrates with Prisma for database management, providing a structured and scalable backend for link and user data.

## Features

  * **URL Shortening**: Convert lengthy URLs into short, easy-to-share links.
  * **User Authentication**: Secure user registration and login functionality using JWT (JSON Web Tokens).
  * **Personalized URL Management**: Users can view and manage all the short URLs they have created.
  * **Database Management**: Utilizes Prisma ORM for seamless interaction with a PostgreSQL database, managing `User` and `Link` models.

## Technologies Used

  * **Backend**: NestJS (TypeScript)
  * **Database**: PostgreSQL (managed with Prisma ORM)
  * **Authentication**: Passport-JWT, bcrypt

## Project Setup

To get the project up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

  * Node.js (version 20 or higher recommended)
  * npm (comes with Node.js)
  * PostgreSQL database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd ultralink-url-shortener
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project and add the following environment variables:

    ```
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
    SECRET_KEY="your_jwt_secret_key"
    SECRET_KEY_EXPIRE="1h" # e.g., 1h, 7d
    PORT=3000
    ```

      * **DATABASE\_URL**: Your PostgreSQL connection string.
      * **SECRET\_KEY**: A strong, secret key for JWT signing.
      * **SECRET\_KEY\_EXPIRE**: The expiration time for your JWT tokens.
      * **PORT**: The port on which the application will run (default is 3000).

4.  **Run Database Migrations:**
    Apply the Prisma migrations to set up your database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

    This will create the `Link` and `User` tables in your database.

### Running the Project

You can run the project in different modes:

  * **Development Mode (with watch)**:

    ```bash
    npm run start:dev
    ```

    This will start the application and automatically recompile on file changes.

  * **Production Mode**:

    ```bash
    npm run start:prod
    ```

    This builds the application for production and starts it.

  * **Development (no watch)**:

    ```bash
    npm run start
    ```

### API Endpoints

  * **Authentication**

      * `POST /auth/register`: Register a new user.
      * `POST /auth/login`: Log in an existing user and receive a JWT token.

  * **URL Management**

      * `POST /url-manage`: Create a new short URL (requires JWT authentication).
      * `GET /url-manage`: Get all short URLs (publicly accessible).
      * `GET /url-manage/by-user`: Get all short URLs created by the authenticated user (requires JWT authentication).

## Running Tests

The project includes unit and end-to-end (e2e) tests.

  * **Unit Tests**:

    ```bash
    npm run test
    ```

  * **End-to-End Tests**:

    ```bash
    npm run test:e2e
    ```

  * **Test Coverage**:

    ```bash
    npm run test:cov
    ```

## Future Enhancements (QR Code Feature)

We are planning to implement a **QR code generation feature**. This will allow users to instantly generate a QR code for their shortened URLs, making it even easier to share links across various platforms and devices. The QR codes will directly redirect to the original long URL.

## Contributions

Suggestions and collaborations are highly welcome\! If you have any ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request. We look forward to building Ultralink into an even more powerful tool with your help.
