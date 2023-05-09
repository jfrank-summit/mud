import { MudChain } from "./types";

const coreEvm = {
  name: "subspace core-evm",
  id: 1003,
  network: "core-evm",
  nativeCurrency: { decimals: 18, name: "TSSC", symbol: "TSSC" },
  rpcUrls: {
    default: {
      http: ["https://rpc-0.evm.devnet.subspace.network/ws"],
      webSocket: ["wss://rpc-0.evm.devnet.subspace.network/ws"],
    },
    public: {
      http: ["https://rpc-0.evm.devnet.subspace.network/ws"],
      webSocket: ["wss://rpc-0.evm.devnet.subspace.network/ws"],
    },
  },
  modeUrl: undefined,
  faucetUrl: undefined,
} as const satisfies MudChain;

export default coreEvm;
