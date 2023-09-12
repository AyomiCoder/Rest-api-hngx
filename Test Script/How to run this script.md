### Python Script to Test this REST API

This guide explains how to run a Python script that tests a REST API by sending HTTP requests to it. The script is designed to interact with the API's CRUD (Create, Read, Update, Delete) operations using the `requests` library.

#### Prerequisites

- **Python**: Ensure that you have Python installed on your computer. If not, you can download and install Python from the official website: [Python Downloads](https://www.python.org/downloads/). This script is compatible with Python 3.x.

- **`requests` Library**: Install the `requests` library, which is used to make HTTP requests from Python. You can install it using `pip`, the Python package manager, by running the following command in your terminal or command prompt:

  ```
  pip install requests
  ```

#### Steps to Run the Script

1. **Run the Script**: Open a terminal or command prompt, navigate to the directory where the Python script is located, and execute the script using the `python` command:

   ```
   python script.py
   ```

2. **Observe Output**: The script will execute and send HTTP requests to your REST API's endpoints based on the defined functions. You will see the responses and results of the API operations displayed in the terminal.

#### Script Usage

- The script includes functions for GET, PUT, and DELETE operations. It demonstrates how to perform these operations using both `_id` and `name` as identifiers for persons.

- It creates and deletes sample persons for testing purposes.

#### Notes

- The script is intended for testing and development purposes and should not be used in a production environment.