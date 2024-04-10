# 99Tech PROBLEM #5 A Crude Server

## SPECIFICATION

-   Module: **Score Board Module**
-   Develop a backend server with ExpressJS. You are required to build a set of CRUD interface that allow a user to interact with the service. You are required to use TypeScript for this task.

1. Interface functionalities:
    - a. Create a resource.
    - b. List resources with basic filters.
    - c. Get details of a resource.
    - d. Update resource details.
    - e. Delete a resource.
2. You should connect your backend service with a simple database for data persistence.

## Configuation

Minimum requirements [Node.js](https://nodejs.org/) v10+

Install the necessary library packages for the Server:

```sh
cd Problem5
npm i
```

Configure environment variables for Server:

-   **POSTGRES_ENABLE**: enable postgres database.
-   **POSTGRES_HOST**: database server host(localhost) .
-   **POSTGRES_PORT**: database server port .
-   **POSTGRES_DATABASE**: database.
-   **POSTGRES_USERNAME**: database username.
-   **POSTGRES_PASSWORD**: database password.
-   **PORT**: port server.

##### 1. Run server :

```
cd Problem5
npm run dev
```
