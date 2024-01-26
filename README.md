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


### Running

```
truffle migrate --network polygonTestnet


npx truffle dashboard

npx truflle console
npx truffle compile
npx truffle migrate --reset --compile-all --network development

npx truffle exec scripts/mint.js 
```