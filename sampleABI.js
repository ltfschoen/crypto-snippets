// https://github.com/markspereira/ropsten_example_dapp
const ropsten_example_dapp = [
  {
    "constant": true,
    "inputs": [],
    "name": "getId",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_fName",
        "type": "string"
      },
      {
        "name": "_age",
        "type": "uint256"
      }
    ],
    "name": "setId",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

module.exports = {
  IdContractABI: ropsten_example_dapp
}