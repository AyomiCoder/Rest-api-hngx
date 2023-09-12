import requests

# The base URL
base_url = "https://ayomide-rest-api.vercel.app/api"

# Function to make a GET request and retrieve details of a person by _id or name
def get_person(identifier):
    response = requests.get(f"{base_url}/{identifier}")
    return response

# Function to make a PUT request and update details of an existing person by _id or name
def update_person(identifier, new_name):
    data = {"name": new_name}
    response = requests.put(f"{base_url}/{identifier}", json=data)
    return response

# Function to make a DELETE request and remove a person by _id or name
def delete_person(identifier):
    response = requests.delete(f"{base_url}/{identifier}")
    return response

# Testing the CRUD operations
if __name__ == "__main__":
    # Create a new person
    create_response = requests.post(f"{base_url}", json={"name": "John Doe"})
    _id = create_response.json().get("_id")

    # Get person by _id
    get_by_id_response = get_person(_id)
    print("Get Person by _id Response:")
    print(get_by_id_response.json())

    # Get person by name
    get_by_name_response = get_person("John Doe")
    print("Get Person by Name Response:")
    print(get_by_name_response.json())

    # Update person by _id
    update_by_id_response = update_person(_id, "John Smith")
    print("Update Person by _id Response:")
    print(update_by_id_response.json())

    # Update person by name
    update_by_name_response = update_person("John Smith", "Jane Doe")
    print("Update Person by Name Response:")
    print(update_by_name_response.json())

    # Delete person by name
    delete_by_name_response = delete_person("Jane Doe")
    print("Delete Person by Name Response:")
    print(delete_by_name_response.json())
    
    create_response = requests.post(f"{base_url}", json={"name": "Ayomide Aluko"})
    _id = create_response.json().get("_id")

    # Delete person by _id
    delete_by_id_response = delete_person(_id)
    print("Delete Person by _id Response:")
    print(delete_by_id_response.json())

    