# Node Chat App

This is a simple chat application built with Node.js, Express, and Socket.io.

## Features

- Real-time messaging
- Stores messages in a MongoDB database
- Serves static files

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd node_chat_app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the MongoDB server:
    ```sh
    mongod
    ```
2. Start the application server:
    ```sh
    node server.js
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## Endpoints

- `GET /messages`: Retrieve all messages.
- `POST /messages`: Post a new message.
- `GET /messages/:user`: Retrieve messages by a specific user.

## Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [Request](https://www.npmjs.com/package/request)

## Future Improvements

- Add user authentication
- Enhance the UI

## License

This project is licensed under the ISC License.