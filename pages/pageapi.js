import React, { useState, useEffect } from "react";
import Web3 from 'web3'

const WalletTracker = () => {
    const [transactions, setTransactions] = useState([]);
    const API_KEY = "KXGKEHGZVQXGMKEFA2VAFSAYD5GW5EAHAU";
    const WALLET_ADDRESS = "0xdc18a7dc0823593a8e060ee177a78ae30d864834";
    const INVESTOR1_ADDRESS = "0xbaaca50cba062881a36b396e642cf047c4cbff97";
    const INVESTOR2_ADDRESS = "0xc0ab5634589e474cbe93b0991fd6aeb91b13a367";


    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch(
                `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${WALLET_ADDRESS}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
            );
            const data = await response.json();
            setTransactions(data.result);
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h1>Transactions for Wallet: {WALLET_ADDRESS}</h1>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.hash}>
                        <p>Amount: {Web3.utils.fromWei(transaction.value, 'ether')} ETH</p>
                        <p>To: {transaction.to === WALLET_ADDRESS ? "Platform" : transaction.to === INVESTOR1_ADDRESS ? "Investor 1" : transaction.to === INVESTOR2_ADDRESS ? "Investor 2" : transaction.to}</p>
                        <p>From: {transaction.from === WALLET_ADDRESS ? "Platform" : transaction.from === INVESTOR1_ADDRESS ? "Investor 1" : transaction.from === INVESTOR2_ADDRESS ? "Investor 2" : transaction.from}</p>
                        <p>Tx: https://goerli.etherscan.io/tx/{transaction.hash}</p>
                    </li>
                ))}
        </ul>
        </div >
    );
};

export default WalletTracker;
