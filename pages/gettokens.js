import { ethers } from "../node_modules/ethers/dist/ethers.esm.js";

const connectButton = document.querySelector(".connectButton")
const connected = document.querySelector(".connected")
const amount = document.querySelector(".amount")
const invest = document.querySelector(".invest")
let signer
let provider
let addressUser

connectButton.addEventListener("click", async function () {

  provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send("eth_requestAccounts", []);

  signer = provider.getSigner()

  addressUser = await signer.getAddress();

  connected.innerText = `Connected with: ${addressUser}`

});


invest.addEventListener("click", async function () {

  const transactionRequest = {
    to: "0xDC18a7dc0823593A8e060ee177a78AE30d864834", //platform test address
    from: `${addressUser}`,
    value: ethers.utils.parseEther(amount.value)
  }

  await signer.sendTransaction(transactionRequest);
})