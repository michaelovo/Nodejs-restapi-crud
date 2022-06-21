A. import the sql table files from the database directory to your database
B. run "node server" to start the application
C. create postman collection and add the following request method and endpoints

base_url = http://localhost:8080/api/v1/tutorials/

1. create new tutorials
method: POST
endpoint: {{base_url}}

2. Fetch all tutorials
method: GET
endpoint: {{base_url}}

3. Fetch a tutorial
method: GET
endpoint: {{base_url}}{id}

4. Fetch Published tutorials
method: GET
endpoint: {{base_url}}published

5. Fetch Tutorials by tutorials
method: GET
endpoint: {{base_url}}?title=html

6. Update tutorial details
method: PUT
endpoint: {{base_url}}{id}

7. Delete a tutorial
method: DELETE
endpoint: {{base_url}}{id}

8. Delete all tutorials
method: DELETE
endpoint: {{base_url}}