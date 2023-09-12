# OxAyomide REST API Guide

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on person records stored in a MongoDB database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Usage](#api-usage)
  - [Endpoints](#endpoints)
  - [Authentication](#authentication)
- [Running the API](#running-the-api)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before setting up and running the API, make sure you have the following prerequisites installed on your system:

- Node.js (at least version 18)
- MongoDB (either locally installed or a connection to a MongoDB Atlas cluster)
- Mongo Shell & MongoDB Compass

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/AyomiCoder/Rest-api-hngx.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Rest-api-hngx
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

## API Usage

### Endpoints

The API provides the following endpoints:

- **Create a Person**: `POST /api`
- **Read All Persons**: `GET /api`
- **Read a Single Person**: `GET /api/_id` or `GET /api/name`
- **Update a Person**: `PUT /api/:user_id` or `PUT /api/name`
- **Delete a Person**: `DELETE /api/:_id` or `DELETE /api/name`

Detailed documentation for each endpoint can be found [here](./Documentation.md).

### Authentication

Authentication is not required to access the API endpoints.

## Running the API

1. Create a `.env` file in the project directory and set the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```

   Replace `your-mongodb-connection-string` with your MongoDB database connection string.

2. Start the API server:

   ```shell
   npm start
   ```

   The API will be available at `http://localhost:3000/api`.

## Testing the API

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints.

## Contributing

Contributions are welcome! If you'd like to contribute to the project.

