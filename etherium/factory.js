import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x953ecDb34823B3Ac99Aa9678931a3247cdDEf76b'
);

export default instance;
