const Error = () => {
  return (
    <div className="w-[480px] bg-[#eb2811] rounded-[20px] py-4 px-8 flex justify-between">
      <span className="text-white">Email atau kata sandimu salah!</span>
      <img src="./cancel.svg" alt="cancel" />
    </div>
  );
};

export default Error;
