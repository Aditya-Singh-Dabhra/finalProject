import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../etherium/Campaign';
import web3 from '../../../etherium/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestsNew extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false,
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;
        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(
                    description,
                    web3.utils.toWei(value, 'ether'),
                    recipient
                )
                .send({ from: accounts[0] });
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create a Request</h3>
                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={(event) =>
                                this.setState({
                                    description: event.target.value,
                                })
                            }
                        ></Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input
                            value={this.state.value}
                            onChange={(event) =>
                                this.setState({ value: event.target.value })
                            }
                            label='Ether'
                            labelPosition='right'
                        ></Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient Address</label>
                        <Input
                            value={this.state.recipient}
                            onChange={(event) =>
                                this.setState({ recipient: event.target.value })
                            }
                        ></Input>
                    </Form.Field>
                    <Message
                        error
                        header='Oops!'
                        content={this.state.errorMessage}
                    ></Message>
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>Back</Button>
                        </a>
                    </Link>
                    <Button loading={this.state.loading} type='submit' primary>
                        Create
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestsNew;
