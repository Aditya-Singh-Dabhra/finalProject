import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../etherium/Campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../etherium/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        // console.log(summary);

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards = () => {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [
            {
                header: manager,
                style: { overflowWrap: 'break-word' },
                meta: 'Address of Manager',
                description:
                    'THe manager created this Campaign and can create requests for withdrawing money',
            },
            {
                header: minimumContribution,
                meta: 'minimum Contribution(wei)',
                description:
                    'YOu must contribute at least this much wei to become a aprrover',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                    'A requests tries to withdraw money from the Contract. Requests must be approved by the aprrovers',
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description:
                    'Number of people who have already donated to this Campaign',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'this balance is how much this contract has left',
            },
        ];

        return <Card.Group items={items}></Card.Group>;
    };

    render() {
        return (
            <Layout>
                <div>
                    <h3>CAmpaign show</h3>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={11}>
                                {this.renderCards()}
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <ContributeForm
                                    address={this.props.address}
                                ></ContributeForm>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Link
                                    route={`/campaigns/${this.props.address}/requests`}
                                >
                                    <a>
                                        <Button primary>View Requests</Button>
                                    </a>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default CampaignShow;
