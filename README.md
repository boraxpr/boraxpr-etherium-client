## boraxpr-etherium-client - Experiment with Decentralized Apps (dApp)

### Overview

This project is a **learning experiment** where I explored connecting a Node.js backend to an Ethereum blockchain using Ganache (a local Ethereum test network). My goal was to understand how blockchain interactions workin a decentralized environment and to gain hands-on experience with Ethereum development tools like Ganache, Web3.js, and PM2.

### Why This Project?

I wanted to explore the basics of building a dApp because I was curious about how blockchain technology could be used to create secure and transparent applications. Additionally, I aimed to understand the practical aspects of working with smart contracts and decentralized networks in a real-world scenario.

### What I Did

- **Set up Ganache** to simulate an Ethereum network for testing purposes.
- Built a **Node.js backend** (using CommonJS) to interact with the blockchain, query balances, and send transactions.
- Learned how to use **Web3.js** to interact with Ethereum and check account balances.
- Installed and used **PM2** for process management and monitoring.

### The "Aha!" Moment

While building the backend, I realized that in a **decentralized application (dApp)**, users should **never send their private keys to a backend server**. This was a critical moment for me to understand that **dApps are entirely frontend** for security reasons, and handling private keys on the backend is a **security risk**. This was a realization about how decentralization and blockchain security work at a deeper level.

### What I Learned

1. **Blockchain Basics:** How to connect to a blockchain, interact with it, and query user data.
2. **Security Practices in dApps:** The importance of never storing or handling private keys on the backend.
3. **Frontend vs Backend in dApps:** Understanding that most blockchain interactions in production dApps occur on the frontend for privacy and security.

### Future Plans

- Refactor this project to implement proper **frontend dApp** architecture.
- Continue learning about **Web3.js**, Ethereum, and other blockchains like **Solana**.
- Explore how to implement a **secure wallet integration** (e.g., MetaMask) on the frontend without compromising user privacy.

---

### Installation & Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with your Ganache URL and private key:

   ```env
   CHAIN_URL=http://localhost:7545
   PRIVATE_KEY=your-ethereum-private-key
   ```

3. Start the app:

   ```bash
   node index.js
   ```

---

### Final Thoughts

This project has been an exciting learning experience, and I'm continuing to iterate on it. Although it’s not a full-fledged dApp yet, I hope it serves as a reminder that the journey of learning and building is just as important as the final product. I’m excited to take these lessons into future blockchain projects.
