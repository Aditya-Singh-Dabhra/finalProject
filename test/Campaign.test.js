const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider(); //web3 version fix
const web3 = new Web3(provider); //web3 version fix

const compiledFactory = require('../etherium/build/CampaignFactory.json');
const compiledCampaign = require('../etherium/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000',
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
    factory.setProvider(provider); //web3 version fix
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allow people to contribute money and marks them as a aprrovers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1],
        });
        const iscontributor = await campaign.methods
            .approvers(accounts[1])
            .call();
        assert(iscontributor);
    });

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '50',
                from: accounts[1],
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
            .createRequest('testing deescription', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000',
            });
        const request = await campaign.methods.requests(0).call();

        assert.equal('testing deescription', request.description);
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            value: web3.utils.toWei('10', 'ether'),
            from: accounts[0],
        });
        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000',
            });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000',
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000',
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        console.log(balance);

        assert(balance > 104);
    });
});
