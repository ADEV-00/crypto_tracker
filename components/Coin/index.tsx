type CoinTabProps = {
  name: string;
  id: string;
  price: number;
  symbol: string;
  marketcap: number;
  volume: string;
  image: string;
  priceChange: number;
};

const CoinTab = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}: CoinTabProps) => {
  return <div>{name}</div>;
};

export default CoinTab;
