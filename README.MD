# File Manager: Node Js Server

## How it works:

- Send a POST request to `/api/upload-` either `single` or `multiple` depending on your choice.

- Get the file path as return value within a response object.

- Send a GET request to `/api/static/:file name` in order to receive the file object.

## How to build and run:

Clone the repo.

Install the dependencies:

### Run with yarn:

```sh
yarn start
```

### Run run with docker:

```sh
docker compose up -d
```
