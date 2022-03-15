import "regenerator-runtime/runtime";

import * as nearAPI from "near-api-js"
import getConfig from "@/config"

window.nearConfig = getConfig(process.env.NODE_ENV || "development");
console.log(process.env.NODE_ENV);
// Initializing contract
async function initContract() {
  // Initializing connection to the NEAR node.
  window.near = await nearAPI.connect(Object.assign({ deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

  // Initializing Wallet based Account. It can work with NEAR TestNet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletAccount = new nearAPI.WalletAccount(window.near);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  window.accountId = window.walletAccount.getAccountId();

  // // Initializing our contract APIs by contract name and configuration.
  // window.contract = await window.near.loadContract(nearConfig.contractName, {
  //   // NOTE: This configuration only needed while NEAR is still in development
  //   // View methods are read only. They don't modify the state, but usually return some value.
  //   viewMethods: ['whoSaidHi'],
  //   // Change methods can modify the state. But you don't receive the returned value when called.
  //   changeMethods: ['sayHi'],
  //   // Sender is the account ID to initialize transactions.
  //   sender: window.accountId,
  // });
}


// Loads nearAPI and this contract into window scope.
window.nearInitPromise = initContract()
