const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'lumber rich blue indicate jaguar belt check endless account supreme system grain',
    'https://rinkeby.infura.io/v3/134308aacf1f49b388499c1a114cdb9a'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('account used for deploying', accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('contract deployed to ', result.options.address);
};

deploy();

// 0x953ecDb34823B3Ac99Aa9678931a3247cdDEf76b
