
export const NODE_URL = {
    HARMONY: "https://api.s0.b.hmny.io",
    LOCALHOST: "http://localhost:8545"
}

export const CONTRACTS = {
    HARMONY: {
        COLLATERAL_TOKEN: process.env.REACT_APP_COLLATERAL_TOKEN_ADDRESS,
        PERPETUAL: process.env.REACT_APP_PERPETUAL_ADDRESS,
        AMM: process.env.REACT_APP_AMM_ADDRESS
    },
    LOCALHOST: {
        COLLATERAL_TOKEN: process.env.REACT_APP_COLLATERAL_TOKEN_ADDRESS,
        PERPETUAL: process.env.REACT_APP_PERPETUAL_ADDRESS,
        AMM: process.env.REACT_APP_AMM_ADDRESS
    }
}