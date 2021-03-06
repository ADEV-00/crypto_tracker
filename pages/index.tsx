import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import InputSearch from "../components/InputSearch";
import CoinsList from "../components/Coin/coinsList";

export default function Home({ filteredCoins }: any) {
  const [currSearch, setSearch] = useState<String>("");

  const handleSearch = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const allCoins = filteredCoins.filter((coin: any) =>
    coin.name.toLowerCase().includes(currSearch.toLowerCase())
  );

  return (
    <Layout>
      <InputSearch type="text" placeholder="Search" onChange={handleSearch} />
      <CoinsList filteredCoins={allCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false`
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
