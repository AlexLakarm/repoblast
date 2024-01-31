import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './Header'
import React, {useState } from 'react';


import styles from '../styles/Home.module.css';


const Home: NextPage = (
) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Bet My Yield</title>
        <meta
          content="Bet my Yield Dapp"
          name="Betmyyield"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header className={styles.header}>
      <Header/>
          <div className={styles.connectbutton}>
            <ConnectButton showBalance="false"label="Connect Wallet"/>
          </div>
      </header>
      <main className={styles.main}>

        <section className={styles.header}>

          <div className={styles.menu}>
  
          </div>
         
          
        </section>
        

        <h1 className={styles.title}>
          Bet My Yield

        </h1>

       

        <div className={styles.grid}>
          <a className={styles.card} href="https://rainbowkit.com">
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a className={styles.card} href="https://wagmi.sh">
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          

          
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made wif hat 
        </a>
      </footer>
    </div>
  );
};

export default Home;
