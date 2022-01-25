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
  return (
    <div className="flex flex-row items-center p-3 mb-3 bg-blue-500 rounded-md bg-gradient-to-r from-[#02004E] to-[#1D1B5B] text-white">
      <img src={image} alt={name} width={30} height={30} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{volume}</div>
    </div>
  );
};

export default CoinTab;
