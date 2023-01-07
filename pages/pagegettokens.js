import React, { useState } from "react";
import { ethers } from "../node_modules/ethers/dist/ethers.esm.js";

const ConnectPage = () => {
    const [connected, setConnected] = useState(false);
    const [addressUser, setAddressUser] = useState("");
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);

    const connect = async () => {
        setProvider(new ethers.providers.Web3Provider(window.ethereum));
        await provider.send("eth_requestAccounts", []);
        setSigner(provider.getSigner());
        setAddressUser(await signer.getAddress());
        setConnected(true);
    };

    const invest = async () => {
        const amount = document.querySelector(".amount").value;
        const transactionRequest = {
            to: "0xDC18a7dc0823593A8e060ee177a78AE30d864834", //platform Goerli test address
            from: addressUser,
            value: ethers.utils.parseEther(amount)
        };

        await signer.sendTransaction(transactionRequest);

    };

    return (
        <div>
            {!connected && (
                <button className="connectButton" onClick={connect}>
                    Connect
                </button>
            )}
            {connected && (
                <div className="connected">Connected with: {addressUser}</div>
            )}
            <input className="amount" />
            <button className="invest" onClick={invest}>
                Invest
            </button>
        </div>
    );
};

export default ConnectPage;