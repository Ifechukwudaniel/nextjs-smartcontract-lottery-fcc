import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import styles from "../styles/Home.module.css";

const supportedChains = ["31337", "5"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Raffle</title>
        <meta name="description" content="Our Smart Contract Raffle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              <LotteryEntrance className="p-8" />
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  );
}
