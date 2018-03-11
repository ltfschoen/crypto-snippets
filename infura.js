require('dotenv').config({silent: true});

module.exports = {
  INFURA_MAINNET_HTTP: `https://mainnet.infura.io/${process.env.INFURA_API_KEY}`,
  INFURA_ROPSTEN_TESTNET_HTTP: `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`, 
  INFURA_RINKEBY_TESTNET_HTTP: `https://rinkeby.infura.io/${process.env.INFURA_API_KEY}`,
  INFURA_KOVAN_TESTNET_HTTP: `https://kovan.infura.io/${process.env.INFURA_API_KEY}`,
  INFURA_IPFS_GATEWAY_HTTP: `https://ipfs.infura.io`,
  INFURA_IPFS_RPC_HTTP: `https://ipfs.infura.io:5001`,
  // Reference: https://github.com/INFURA/infura/issues/29
  INFURA_MAINNET_WS: `wss://mainnet.infura.io/ws`,
  INFURA_ROPSTEN_WS: `wss://ropsten.infura.io/ws`,
  INFURA_RINKEBY_WS: `wss://rinkeby.infura.io/ws`,
  INFURA_RINKEBY_WS_BACKUP: `wss://rinkeby.infura.io/_ws`
}