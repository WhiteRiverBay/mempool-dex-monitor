export const ZERO = '0x0000000000000000000000000000000000000000'
export const CONTRACTS = {
    '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4': {
        name: 'PancakeSwap: Smart Router',
        version: 'pancake-v3',
        type: 'router'
    },
    '0x10ED43C718714eb63d5aA57B78B54704E256024E': {
        name: 'PancakeSwap: Router V2',
        version: 'pancake-v2',
        type: 'router'
    },
    '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73': {
        name: 'PancakeSwap: Factory V2',
    },
    '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364': {
        name: 'PancakeSwap: NonfungiblePositionManager',
        version: 'pancake-v3',
        type: 'liquidity-manager'
    }
};

export const TOKENS = {
    '0x0000000000000000000000000000000000000000': {
        symbol: 'BNB',
        decimals: 18
    },
    '0x55d398326f99059fF775485246999027B3197955': {
        symbol: 'USDT',
        decimals: 18
    },
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c': {
        symbol: 'WBNB',
        decimals: 18
    },
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82': {
        symbol: 'Cake',
        decimals: 18
    },
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8': {
        symbol: 'ETH',
        decimals: 18
    },
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d': {
        symbol: 'USDC',
        decimals: 18
    },
    '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402': {
        symbol: 'DOT',
        decimals: 18
    },
    '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3': {
        symbol: 'DAI',
        decimals: 18
    },
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': {
        symbol: 'MATIC',
        decimals: 18
    },
    '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94': {
        symbol: 'LTC',
        decimals: 18
    },
    '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6': {
        symbol: 'BCH',
        decimals: 18
    },
    '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6': {
        symbol: 'LINK',
        decimals: 18
    },
    // btc
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c': {
        symbol: 'BTCB',
        decimals: 18
    },

}

export const PAIR_TOKENS = {
    '0x7f51c8AaA6B0599aBd16674e2b17FEc7a9f674A1': {
        name: 'Cake-USDT',
        token0: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        token1: '0x55d398326f99059fF775485246999027B3197955'
    },
    '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0': {
        name: 'Cake-BNB',
        token0: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        token1: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    },
}