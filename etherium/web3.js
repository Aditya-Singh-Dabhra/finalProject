import Web3 from 'web3';
// const accessToken = process.env.INFURA_ACCESS_TOKEN;

let web3;
let provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser, client-side
    window.web3.currentProvider.enable();
    provider = new Web3(window.web3.currentProvider);
} else {
    //we are in react, server-side
    provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/134308aacf1f49b388499c1a114cdb9a'
    );
}

web3 = new Web3(provider);

export default web3;
