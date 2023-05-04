import { MudChain } from "./types";

const coreEvm = {
  name: "subspace core-evm",
  id: 1000,
  network: "core-evm",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  rpcUrls: {
    default: {
      http: ["http://localhost:9935"],
      webSocket: ["ws://localhost:6789"],
    },
    public: {
      http: ["http://localhost:9935"],
      webSocket: ["ws://localhost:6789"],
    },
  },
  modeUrl: undefined,
  faucetUrl: undefined,
} as const satisfies MudChain;

export default coreEvm;
