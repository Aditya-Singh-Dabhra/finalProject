import React, { Component } from 'react';
import factory from '../etherium/factory';
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns: campaigns }; //short-hand {campaigns}
    }

    renderCampaigns() {
        const items = this.props.campaigns.map((address) => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>view Campaign</a>
                    </Link>
                ),
                fluid: true,
            };
        });

        return <Card.Group items={items}></Card.Group>;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route='/campaigns/new'>
                        <a>
                            <Button
                                floated='right'
                                content='Create Campaign'
                                icon='add circle'
                                primary
                            ></Button>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;
