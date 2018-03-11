// Infura Web3.js 1.0 API Support
// #!/usr/bin/env node

const Web3 = require('web3');
const { INFURA_ROPSTEN_WS } = require('./infura');
const { IdContractABI } = require('./sampleABI');

const provider = INFURA_ROPSTEN_WS;
const web3 = new Web3(new Web3.providers.WebsocketProvider(provider));

const contractAddress = '0xD90e6dB4334B9Ad7FfC9538Aa157C8D5272D1Ad1';
const contractABI = IdContractABI;
let contract = new web3.eth.Contract(contractABI, contractAddress);

contract.getPastEvents('allEvents', {fromBlock: 0,  toBlock: 'latest'},
  (error, logs) => {
    if (error) console.error(error);
    logs.forEach(log => console.log(log))
    console.log('Finished showing past events')
  })

const subscription = web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
  if (error) return console.error(error);
  console.log('Successfully subscribed!', blockHeader);
}).on('data', (blockHeader) => {
  console.log('data: ', blockHeader);
});

subscription.unsubscribe((error, success) => {
  if (error) return console.error(error);
  console.log('Successfully unsubscribed!');
});