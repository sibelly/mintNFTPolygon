# mintNFTPolygon

### Requirements

- Vs Code settings -> https://stackoverflow.com/questions/67321111/file-import-callback-not-supported

```
{
   ...,
   "solidity.remappingsUnix": [
        "@uniswap/=node_modules/@uniswap/",
        "@openzeppelin/=node_modules/@openzeppelin/"
   ]
}
```

### Docs

- https://wiki.polygon.technology/docs/develop/truffle
- https://docs.polygonscan.com/v/mumbai-polygonscan/


### Running

* Deploy to the blockchain
```
truffle migrate --network polygonTestnet
```

* Mint the NFT
```
node scripts/MintingNFT.js
```


`Attempting to deploy from account  0xAc4145FEF6c828e8aE017207Ad944C988cCb2cF7
Yay! NFT minted successfully`


* Other commands
```
npx truffle dashboard

npx truflle console
npx truffle compile
npx truffle migrate --reset --compile-all --network development

npx truffle exec scripts/mint.js 
```

### Services Used

- https://faucet.polygon.technology/
- https://app.pinata.cloud/pinmanager
- https://mumbai.polygonscan.com/address/0xf4176dd135dad850ec5150d7809d7ed4b560e3b3 (smart contract from test)

### Reference

- https://github.com/EtishaGarg/MintNFT