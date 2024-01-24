# poap-server
A simple GET API to send POAPs

## Configuration

### Environment variables
Set the storage type. Currently only `ipfs` is supported.

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

## License
