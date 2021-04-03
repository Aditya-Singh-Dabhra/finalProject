import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../etherium/Campaign';
import RequestRow from '../../../components/RequestRow';

class RequestsIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        const campaign = Campaign(address);
        const approversCount = await campaign.methods.approversCount().call();
        console.log(approversCount);

        const requestCount = +(await campaign.methods
            .getRequestsCount()
            .call());
        // console.log(requestCount);

        const requests = await Promise.all(
            Array(requestCount)
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call();
                })
        );

        return {
            address: address,
            requests: requests,
            requestCount: requestCount,
            approversCount: approversCount,
        };
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow
                    request={request}
                    key={index}
                    id={index}
                    address={this.props.address}
                    approversCount={this.props.approversCount}
                ></RequestRow>
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated='right'
                            style={{ marginBottom: 15 }}
                        >
                            Add Requests
                        </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount(Ether)</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>ApprovalCount</HeaderCell>
                            <HeaderCell>aprrove</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRow()}</Body>
                </Table>
                <div> Found {this.props.requestCount} requests</div>
            </Layout>
        );
    }
}

export default RequestsIndex;
