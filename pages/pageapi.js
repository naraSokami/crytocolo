import React, { useState, useEffect } from "react";

const WalletTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const API_KEY = "KXGKEHGZVQXGMKEFA2VAFSAYD5GW5EAHAU";
  const WALLET_ADDRESS = "0xDC18a7dc0823593A8e060ee177a78AE30d864834";

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
            <p>Amount: {transaction.value} wei</p>
            <p>To: {transaction.to}</p>
            <p>From: {transaction.from}</p>
            <p>Block Number: {transaction.blockNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletTracker;
