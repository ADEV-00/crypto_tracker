type CoinsListProps = {
  name: string;
  id: string;
  price: number;
  symbol: any;
  marketcap: string;
  valume: any;
  image: string;
  priceChange: any;
};

const CoinsList = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  valume,
  image,
  priceChange,
}: CoinsListProps) => {
  return <div>hello</div>;
};

export default CoinsList;
