import { ethers } from 'ethers'

export const ABI_ERC20 = [
    'function balanceOf(address owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',
    'function transfer(address to, uint amount) returns (bool)',
    'function transferFrom(address _from, address _to, uint _value) external returns (bool)',
    'function approve(address _spender, uint _value)',
    'function allowance(address _owner, address _spender) public view returns (uint remaining)'
]

export const conn = async () => {
    let provider //, res, blocknumber
    try {
        provider = new ethers.BrowserProvider(window.ethereum)
        const network = await provider.getNetwork()
        const chainId = network.chainId
        return {
            provider,
            chainId
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}

// connect to the metamask or other web3 wallet with ethers.js
export const connect = async () => {
    let provider, res, blocknumber
    try {
        provider = new ethers.BrowserProvider(window.ethereum)
    } catch (error) {
        // Dialog.confirm({ message: 'Please install Metamask Or open In Metamask/TokenPocket APP' }).then(() => {
        // 	location.href = 'https://metamask.io/'
        // })
        console.error(error)
        throw error
    }
    try {
        res = await provider.send('eth_requestAccounts', [])
    } catch (error) {
        console.error(error)
        return;
    }
    try {
        blocknumber = await provider.getBlockNumber()
    } catch (error) {
        console.error(error)
        return;
    }

    const network = await provider.getNetwork()
    const chainId = network.chainId

    return {
        provider,
        blocknumber,
        chainId,
        address: res[0]
    };
}

export const ERC20 = {

    getInfo: (address, provider) => {
        if (address === '0x0000000000000000000000000000000000000000') {
            return {
                symbol: 'BNB',
                decimals: 18
            }
        } else if (address === '0x55d398326f99059fF775485246999027B3197955') {
            return {
                symbol: 'USDT',
                decimals: 18
            }
        } else if (address === '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') {
            return {
                symbol: 'WBNB',
                decimals: 18
            }
        } else {
            return {
                symbol: 'Unknown',
                decimals: 18
            }
        }

        // try {

        //     const contract = new ethers.Contract(address, ABI_ERC20, provider)
        //     const symbol = await contract.symbol()
        //     const decimals = await contract.decimals()
        //     return {
        //         symbol,
        //         decimals
        //     }
        // } catch (e) {
        //     // log error
        //     console.error(e);
        //     return {
        //         symbol: '???',
        //         decimals: 18
        //     }
        // }
    }
}


export const shortAddress = (address) => {
    if (!address) {
        return ''
    }
    return address.substring(0, 8) + '...' + address.substring(address.length - 6)
}

export const formatUnits = (amount, decimals) => {
    if (!amount) {
        return '0'
    }
    if (!decimals) {
        decimals = 18
    }
    // return (amount / (10 ** decimals)).toFixed(4)
    return ethers.formatUnits(amount, decimals)
}