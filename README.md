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

### Setting up the POAPs

Once you have the links.txt file

1. Download the `links.txt` from "hello@poap.xyz"
2. Add the POAPs to your cloud storage, or IPFS, or whatever you want.

Now send a POST to the api to load the file.  The API will fetch the .txt and save it to cache.

```bash
curl --location 'http://localhost:3000' \
--header 'Content-Type: application/json' \
--data '{
    "file": "https://raw.githubusercontent.com/bitcoinbrisbane/poap-server/main/links.txt"
}'
```

Example of `events.txt`:

```text
http://POAP.xyz/claim/8uj8vj
http://POAP.xyz/claim/e71pet
http://POAP.xyz/claim/xdrbbi
```

### Getting the POAPs

From your web app, you can call the API to get the next POAP with its redirect url.  This can be displayed as a QR code, or a link, or whatever you want.  When the event is running, the user can click the link and claim the POAP.  The API will mark this POAP as claimed and will not return it again.

```bash
curl --location --request GET 'http://localhost:3000?event=pizzaday'
```

```javascript
// Can be anything instead of `maxWidth` that limits the width.
<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={value}
    viewBox={`0 0 256 256`}
    />
</div>
```

```json
[
    {
        "url": "https://poap.bitcoinbrisbane.com.au?event=2024-pizzaday&redirect=http://POAP.xyz/claim/8uj8vj",
        "fetched": 0
    },
    {
        "url": "https://poap.bitcoinbrisbane.com.au?event=2024-pizzaday&redirect=http://POAP.xyz/claim/e71pet",
        "fetched": 0
    },
    {
        "url": "https://poap.bitcoinbrisbane.com.au?event=2024-pizzaday&redirect=http://POAP.xyz/claim/xdrbbi",
        "fetched": 0
    }
]
```

### TODOS

- [ ] Make multi users

### Contributing and sponsors
- Axios
- Express
- node-cache

## License

CC0 1.0 Universal
