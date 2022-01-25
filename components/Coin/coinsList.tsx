import CoinTab from "./index";

type CoinsListProps = {
  filteredCoins: any;
};

const CoinsList = ({ filteredCoins }: CoinsListProps) => {
  console.log("this is coins list");
  return (
    <>
      {filteredCoins.map((coin: any) => {
        return (
          <CoinTab
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};

export default CoinsList;
