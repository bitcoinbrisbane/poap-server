# poap-server
A simple GET API to send a one time POAPs link that a client can call to fetch the POAP link for their consumption.

## Configuration

### Environment variables
Set the storage type.

- REDIS
- MEMORY

TODO: Add more storage types
- MONGO
- POSTGRES

## Usage

```bash
yarn install
yarn start
```

### Get POAPs

Once you have the links.txt file

1. Download the `links.txt` from "hello@poap.xyz"
2. Add the POAPs to your cloud storage, or IPFS, or whatever you want.
2. Rename the txt as `links.txt`, eg `2024-pizza-day.txt`

Now send a POST to the api to load the file

```bash
curl --location 'http://localhost:3000' \
--header 'Content-Type: application/json' \
--data '{
    "file": "https://raw.githubusercontent.com/bitcoinbrisbane/poap-server/main/links.txt"
}'
```

![image](https://github.com/bitcoinbrisbane/poap-server/assets/8411406/ef57efe2-77ee-42de-8634-208a0c2e180c)

![image](https://github.com/bitcoinbrisbane/poap-server/assets/8411406/539f50de-cabe-41ae-8f22-196695a43896)


Example of `events.txt`:

```text
http://POAP.xyz/claim/8uj8vj
http://POAP.xyz/claim/e71pet
http://POAP.xyz/claim/xdrbbi
```

### TODOS

- [ ] Make multi users

### Contributing and sponsors
- Axios
- Express
- node-cache

## License

CC0 1.0 Universal
