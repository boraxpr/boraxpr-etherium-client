const Web3 = require('web3').default;
const dotenv = require('dotenv');
const express = require('express');

// Load environment variables from .env file
dotenv.config();

const web3 = new Web3(process.env.CHAIN_URL);

const app = express();
const port = 3000;

app.use(express.json());

app.get('/balance', async (req, res) => {
  console.log('Fetching balance...');
  try {
    const account = web3.eth.accounts.privateKeyToAccount(
      process.env.PRIVATE_KEY
    );
    const balance = await web3.eth.getBalance(account.address);
    const ethBalance = web3.utils.fromWei(balance, 'ether');
    console.log('Balance fetched:', ethBalance);
    res.json({ balance: ethBalance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get balance' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
