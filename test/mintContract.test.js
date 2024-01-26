
const assert = require('assert');
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545'); 
const data = require('../build/contracts/mintContract.json');
const abiArray = data.abi;
const contract_address = '0xF4176DD135Dad850eC5150D7809d7eD4B560e3b3';

let accounts;
let art;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    art = await new web3.eth.Contract(abiArray,contract_address)
});

describe('mintContract', () => {

    it('checks the owner', async () =>{
        let owner = await art.methods.owner().call()
        assert.equal(owner,accounts[0])
    });

    it('checks owner of Token ID 1', async () => {
        const tokenURI = 'ABCD';
        await art.methods.mintNFT(tokenURI).send({from: accounts[1]});
        let owner = await art.methods.ownerOf(1).call();
        assert.equal(owner,accounts[0]);
    });
});