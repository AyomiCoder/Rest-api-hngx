# OxAyomide REST API Documentation

## Introduction

Welcome to the comprehensive documentation for our REST API, designed to facilitate the management of "Persons." This API empowers developers to perform a wide range of operations on person records, leveraging the power of a MongoDB database. Whether you're building a user management system, a contact book application, or any project that involves managing individuals, this API has you covered.

Our REST API adheres to industry best practices, providing a robust and flexible solution for creating, retrieving, updating, and deleting person records. In this documentation, you will find detailed information on each endpoint, request and response formats, and example use cases to help you make the most of this resource.

**Base URL:** `https://your-api-base-url.com/api`

**Authentication:** No authentication is required for using this API, ensuring seamless integration into your applications.

**Error Handling:** Our API follows standard HTTP status codes and provides clear error messages in JSON format to assist developers in identifying and resolving issues.


## Endpoints

**Note: Make sure the `name` comes first before the `user_id`**

### Create a Person

- **Endpoint**: `POST /api`
- **Description**: Create a new person record.
- **Request Body**:
  - `name` (string): The name and an identifier for the person.
  - `user_id` (number): The user ID and an identifier for the person.
- **Response**:
  - HTTP Status Code: `201 Created`
  - Response Body: JSON representation of the created person.
- **Example Request**:
  ```http
  POST /api
  Content-Type: application/json

  {
    "name": "John Doe",
    "user_id": "123"
  }
  ```
- **Example Response**:
  ```json
  {
    "name": "John Doe",
    "user_id": "123"
  }
  ```

### Read All Persons

- **Endpoint**: `GET /api`
- **Description**: Fetch details of all persons stored in the database.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of all persons in the database.
- **Example Request**:
  ```http
  GET /api
  ```
- **Example Response**:
  ```json
  [
    {
      "name": "John Doe",
      "user_id": "123"
    },
    {
      "name": "Jane Smith",
      "user_id": "456"
    },
    {
      "name": "Alice Johnson",
      "user_id": "789"
    }
  ]
  ```

### Read a Person

- **Endpoint**: `GET /api`
- **Description**: Fetch details of a person by user_id or name. You can use query parameters to filter results.
- **Query Parameters**:
  - `name` (string): The name of the person to retrieve.
  - `user_id` (number): The user_id of the person to retrieve.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of the person(s) matching the query.
- **Example Request**:
  - To fetch by user_id:
    ```http
    GET /api/123
    ```
  - To fetch by name:
    ```http
    GET /api/John Doe
    ```
- **Example Response**:
  ```json
  [
    {
      "name": "John Doe",
      "user_id": "123"
    }
  ]
  ```

### Update a Person

- **Endpoint**: `PUT /api/user_id` or `PUT /api/name`
- **Description**: Modify details of an existing person by user_id or name.
- **Request Parameters**:
  - `name` (string, URL parameter): The user_id of the person to update.
  - `user_id` (number, URL parameter): The user_id of the person to update.
- **Request Body**:
  - `name` (new string): The updated name of the person.
  - `user_id` (new number): The updated user_id of the person.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of the updated person.
- **Example Request**:
  ```http
  PUT /api/123
  Content-Type: application/json

  {
    "name": "Updated Name"
  }
  ```
  or

    ```http
  PUT /api/John Doe
  Content-Type: application/json

  {
    "name": "Updated Name"
  }
  ```
- **Example Response**:
  ```json
  {
    "name": "Updated Name",
    "user_id": "123"
  }
  ```

### Delete a Person

- **Endpoint**: `DELETE /api/user_id` or `DELETE /api/name`
- **Description**: Remove a person by user_id or name.
- **Request Parameters**:
  - `name` (string, URL parameter): The name of the person to delete.
  - `user_id` (number, URL parameter): The user_id of the person to delete.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON object with a success message.
- **Example Request**:
  ```http
  DELETE /api/123
  ```
  or 

    ```http
  DELETE /api/John Doe
  ```
- **Example Response**:
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

## Conclusion

## Conclusion

Congratulations! You have successfully explored the API documentation for the REST API designed for managing persons. This API provides a range of endpoints that allow you to interact with person records in a flexible and efficient manner.

In summary, this API empowers you to:

- **Create**: Add new person records to the database.
- **Read**: Retrieve individual or all person records by user_id, name, or fetch all persons.
- **Update**: Modify details of an existing person record by user_id.
- **Delete**: Remove a person record by user_id.

The API is designed to be straightforward and easy to use, making it a valuable tool for various applications, such as user management systems, address books, and more.

If you have any questions, require additional assistance, or encounter any issues while using this API, please do not hesitate to reach out to me:

+ Slack Name - OxAyomide
+ [Gmail](mailto:alukoayomide623@gmail.com)