import React from "react";
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n.js';
import { shortAddress, formatUnits, conn } from "../../api/dapp.js";
import { TOKENS, CONTRACTS } from "../../api/const.js";

import NavBar from "../../components/nav/NavBar";

class PHomePage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.provider = null;

        this.state = {
            items: [],
            tab: 0,
            tabs: ['Pending...'],
        };
        // websocket 
        this.ws = new WebSocket("ws://localhost:5001/ws");
        this.init();
    }

    // starting the websocket client
    init = async () => {

        try {
            const { provider, chainId } = await conn()
            this.provider = provider
        } catch (e) {
            console.error(e);
        }
        this.ws.onopen = () => {
            console.log("connected");
        };

        const that = this

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            // console.log(message, that.state.items.length);
            if (message.type === 'trade') {
                if (!TOKENS[message.data.token0]
                    || !TOKENS[message.data.token1]) {
                    if (!TOKENS[message.data.token0]) {
                        console.log('token0 not found', message.data.token0)
                    }
                    if (!TOKENS[message.data.token1]) {
                        console.log('token1 not found', message.data.token1)
                    }
                    return;
                }
            }
            try {

                if (message.data.token0) {
                    message['token0Info'] = TOKENS[message.data.token0]
                }
                if (message.data.token1) {
                    message['token1Info'] = TOKENS[message.data.token1]
                }

                that.setState({
                    items: [message, ...that.state.items],
                })
            } catch (e) {
                console.log(e, message);
            }

        };

        this.ws.onclose = () => {
            console.log("disconnected");
            // automatically try to reconnect on connection loss
            this.init();
        };

    }

    render() {
        return (
            <div>
                <NavBar i18n={this.props.lang.i18n} />
                <div>
                    <div style={{
                        maxWidth: '600px',
                    }}>
                    {this.state.items.map((item) => {
                        return <ItemCard item={item} lang={this.props.lang} />
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        

        // console.log('token0', this.token0Info, 'token1', this.token1Info);
    }

    render() {
        const item = this.props.item;
        const t = this.props.lang.t;

        const token0Info = item['token0Info'];
        const token1Info = item['token1Info'];

        const cardStyle = {
            background: "rgba(255,255,255,0.01)",
            boxShadow: "inset 0px 0px 20px 0px rgba(255,255,255,0.2)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.21)",
            padding: "16px",
            margin: "16px",
        }

        const cardBody = {
        }

        const cardFooter = {
            borderTop: "1px solid rgba(255,255,255,0.21)",
            paddingTop: "8px",
            marginTop: "8px",
            color: "rgba(255,255,255,0.5)",
        }

        const cardHeader = {
            color: "rgba(255,255,255,0.5)",
            fontSize: "12px",
            marginBottom: "8px",
            borderBottom: "1px solid rgba(255,255,255,0.21)",
            paddingBottom: "8px",
            display: 'flex',
            justifyContent: 'space-between',
        }

        const labelStyle = {
            color: "rgba(255,255,255,0.5)",
            fontSize: "12px",
            marginRight: "8px",
        }

        const tagStyle = {
            background: "rgba(255,255,255,0.05)",
            borderRadius: "4px",
            paddingTop: "4px",
            paddingBottom: "4px",
            fontSize: "12px",
            marginRight: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
        }

        const rowStyle = {
            display: 'flex',
            alignItems: 'center',
        }

        const descStyle = {
            color: "yellowgreen",
            fontSize: "12px",
            marginRight: "8px",
            marginBottom: '8px'
        }
        let show = true
        if (item.type === 'trade') {
            if (!token0Info
                || !token1Info) {
                show = false
                if (!token0Info) {
                    console.log('comp token0 not found', item.data.token0)
                }
                if (!token1Info) {
                    console.log('comp token1 not found', item.data.token1)
                }
            }
        }

        return (
            show ? <div style={cardStyle}>
                <div style={cardHeader}>
                    <div style={tagStyle}>{item.type.toUpperCase()}</div>
                    <div style={{width: '10px'}}></div>
                    <div style={tagStyle}>
                        <a target="_blank" ref="" href={'https://bscscan.com/address/' + item.data.tx.to}>{CONTRACTS[item.data.tx.to].name}</a>
                    </div>
                </div>
                <div style={cardBody}>
                    
                    {/* <div style={rowStyle}>
                        <div style={labelStyle}>DESCRIPTION</div>
                    </div> */}

                    {token0Info &&
                        <div style={rowStyle}>
                            <div style={labelStyle}>Input</div>
                            <div>
                                {formatUnits(item.data.amount0, token0Info.decimals)}  {token0Info.symbol}<span style={labelStyle}>({shortAddress(item.data.token0)})</span>
                            </div>
                        </div>
                    }
                    {token1Info&& <div style={rowStyle}>
                        <div style={labelStyle}>Output</div>
                        <div>
                            {formatUnits(item.data.amount1, token1Info.decimals)} {token1Info.symbol}<span style={labelStyle}>({shortAddress(item.data.token1)})</span>
                        </div>
                    </div>
                    }

                    {item.type === 'trade' && <div style={rowStyle}>
                        <div style={labelStyle}>Swap Price</div>
                        <div>
                            {item.data.amount1 > 0 ? item.data.amount0 / item.data.amount1 : 0} {token1Info.symbol} / {token0Info.symbol}
                        </div>
                    </div>}

                    {/* if liquidity is not null  */}
                    {item.data.liquidity && <div style={rowStyle}>
                        <div style={labelStyle}>Liquidity</div>
                        <div>
                            {formatUnits(item.data.liquidity, 18)} LP
                        </div>
                    </div>}

                    <div style={rowStyle}>
                        <div style={labelStyle}>From</div>
                        <div>
                            <a ref="" href={'https://bscscan.com/address/' + item.data.account} target="_blank">{shortAddress(item.data.account)}</a>
                             </div>
                    </div>

                    
                    <div style={rowStyle}>
                        <div style={labelStyle}>GAS Price</div>
                        <div>{formatUnits(item.data.tx.gasPrice, 9)} gwei</div>
                    </div>
                    <div style={rowStyle}
                    >
                        <div style={labelStyle}>GAS Max Price</div>
                        <div>{formatUnits(item.data.tx.maxFeePerGas, 9)} gwei</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>GAS Limit: </div>
                        <div>{item.data.tx.gasLimit}</div>
                    </div>
                </div>
                <div>
                    <div style={cardFooter}>
                        Hash:<a rel="noreferer" target="_blank" href={'https://bscscan.com/tx/' + item.data.tx.hash} >{shortAddress(item.data.tx.hash)}</a>    # {item.data.tx.blockNumber ? item.data.tx.blockNumber : 'Not sure'}</div>
                </div>
            </div> : null
        );
    }
}

function HomePage() {
    const { t, i18n } = useTranslation();

    return (
        <PHomePage lang={{
            t, i18n
        }} />
    )
}

export default HomePage;