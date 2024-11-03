# Node Chat App

This is a simple chat application built with Node.js, Express, and Socket.io.

## Features

- Real-time messaging
- Stores messages in memory
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

1. Start the server:
   ```sh
   node server.js
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Endpoints

- `GET /messages`: Retrieve all messages.
- `POST /messages`: Post a new message.

## Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)

## Future Improvements

- Store data in a database for persistence.

## License

This project is licensed under the ISC License.
