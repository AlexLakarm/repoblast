import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
} from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const blastSepolia = {
  id: 168587773,
  name: 'Blast Sepolia',
  network: 'Blast Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.blast.io'] },
    public: { http: ['https://sepolia.blast.io'] },
  },
  blockExplorers: {
    default: { name: 'BlastScan', url: 'https://testnet.blastscan.io' },
  },
  testnet: true,
}


const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet, blastSepolia],
	[
	  alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
	  publicProvider()
	]
  );


const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider locale="en-US" theme={midnightTheme({
      accentColor: '#FCCF00',
      accentColorForeground: 'black',
      fontStack: 'system',
      overlayBlur: 'small',
    })} 
    initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
    chains={chains} >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
