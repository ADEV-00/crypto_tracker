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
    <div className="flex flex-row justify-between items-center p-3 mb-3 bg-blue-500 rounded-md bg-gradient-to-r from-[#02004E] to-[#1D1B5B] text-white">
      <img src={image} alt={name} width={30} height={30} />
      <div className="w-24">{name}</div>
      <div className="w-12">{symbol}</div>
      <div className="w-20">${price}</div>
      <div className="w-24">{volume.toLocaleString()}</div>
      {priceChange < 0 ? (
        <div className="w-12 text-red-600">{priceChange.toFixed(2)}%</div>
      ) : (
        <div className="w-12 text-green-600">{priceChange.toFixed(2)}%</div>
      )}

      <div>Mkt Cap: ${marketcap.toLocaleString()}</div>
    </div>
  );
};

export default CoinTab;
