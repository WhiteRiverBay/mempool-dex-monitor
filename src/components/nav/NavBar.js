import React from "react";
import Language from './Lang';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: props.address,
            chainId: props.chainId,
            blocknumber: props.blocknumber,
            provider: null,

            onConnect: props.onConnect,
            onChainSwitch: props.onChainSwitch,
            onAccountChange: props.onAccountChange,
            onBlockNumberChange: props.onBlockNumberChange
        }
    }

    onConnect(res) {
        this.setState({
            provider: res.provider,
            address: res.address,
            chainId: res.chainId,
            blocknumber: res.blocknumber
        });
        if (this.props.onConnect) {
            this.props.onConnect(res);
        }
    }
    onBlockNumberChange(block) {
        this.setState({
            blocknumber: block
        });
        if (this.props.onBlockNumberChange) {
            this.props.onBlockNumberChange(block);
        }

    }
    onAccountChange(accounts) {
        this.setState({
            address: accounts[0]
        });
        if (this.props.onAccountChange) {
            this.props.onAccountChange(accounts);
        }
    }
    onChainSwitch(chainId) {
        this.setState({
            chainId: chainId
        });
        if (this.props.onChainSwitch) {
            this.props.onChainSwitch(chainId);
        }
    }
    render() {
        const navbarWrapper = {
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
            alignItems: 'center'
        }


        return (
            <div style={navbarWrapper}>
                <div style={{
                    display: "flex",
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex'
                    }}>
                        DEX MEMPOOL POC
                    </div>
                </div>
                <div style={
                    { display: "flex",alignItems: 'center' }
                }>
                    
                    <Language i18n={this.props.i18n}/>
                </div>
            </div>
        );
    }
}

export default NavBar;