import React from "react";
import { connect, ChainIDs } from "../../api/dapp";


import { onBlockNumberChange, onAccountChange, onChainSwitch } from "../../api/dapp";

class Connect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: null,
            address: null,
            chainId: null,
            blocknumber: null,
        };
        this.doConnnect = this.doConnnect.bind(this);
    }

    componentDidMount() {
        this.doConnnect();
    }

    async doConnnect() {
        let self = this;

        let res = await connect()

        this.setState({
            provider: res.provider,
            address: res.address,
            chainId: res.chainId,
            blocknumber: res.blocknumber
        }, () => {
            console.log("state address = " + this.state.address);
        });
        console.log("res address = " + res.address);
        if (this.props.onConnect) {
            this.props.onConnect(res);
        }
        onBlockNumberChange({
            provider: res.provider,
            success: (block) => {
                self.setState({
                    blocknumber: block
                });

                if (self.onBlockNumberChange) {
                    self.props.onBlockNumberChange(block);
                }
            }
        });
        onAccountChange({
            success: (accounts) => {
                self.setState({
                    address: accounts[0]
                });
                if (self.onAccountChange) {
                    self.props.onAccountChange(accounts);
                }
            }
        });
        onChainSwitch({
            success: (chainId) => {
                self.setState({
                    chainId: chainId
                });
                if (self.onChainSwitch) {
                    self.props.onChainSwitch(chainId);
                }
            }
        });
    }



    render() {

        const walletStyle = {
            backgroundColor: "#0B57FF",
            borderRadius: '20px',
            color: "#FFFFFF",
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: '4px',
            paddingBottom: '4px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
        }

        return (
            <div style={walletStyle}>
                <div style={{ marginRight: '6px' }}>
                    <img src={require('../../assets/wallet.png')} alt="wallet" style={{ width: '14px', height: '14px' }} />
                </div>
                <div>
                    {!this.state.address ? (<button onClick={this.doConnnect}>Connect</button>) : (
                        <div>
                            <div>{ChainIDs[this.state.chainId]} {this.state.address.replace(/^(.{6}).+(.{4})$/, "$1...$2")}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default Connect;