const InputSearch = ({ ...rest }) => {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <input
        className="bg-transparent border-b-2 border-[#B844FF] text-white p-2 rounded-md focus:outline-none"
        {...rest}
      />
    </div>
  );
};

export default InputSearch;
