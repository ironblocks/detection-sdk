# RPC Detection Service

<img width="100" alt="image" src="https://github.com/ironblocks/detection-sdk/assets/108297139/0a503744-9db4-4cdd-b00a-0fc71a311919">
<br>

## Description
This is an RPC server that provides a simple API for running different types of detectors on demand.
<br>
The server can be run either locally or as a Docker container.

<br>

## Adding new detectors
[A detailed guide for adding new detectors](./src/detection/README.md)
<br>
**Note** that detector execution time is being restricted to a reasonable amount of time.

<br>

## Requirements
- `Node.js` 18 or higher.
- `Docker` and `docker-compose` (if running as a Docker container).
<br><br>

## Installation

1. Clone the [repository](https://github.com/ironblocks/detection-sdk.git):
   ```bash
   git clone https://github.com/ironblocks/detection-sdk.git
   ```

2. Change into the project directory:
   ```bash
   cd detection-sdk
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
<br>

## Running the server

<br>

### Running Locally

```bash
npm start
```
The server will start on: `http://localhost:8000`

<br>

### Running as a Docker Container
1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Start the Docker container:
   ```bash
   docker-compose up
   ```

3. The server will be available at `http://0.0.0.0:80`

<br>

## Configuration

The server can be configured via environment variables. The following variables are supported:
* `HOST`: the host to which the server will bind (default: `localhost`)
* `PORT`: the port on which the server will listen (default: `8000`)

<br>

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

<br>

## License

This project is licensed under the `Ironblocks` License.

<br>

## Contact

If you have any questions or concerns, please open an issue or contact us at hello@ironblocks.com.
