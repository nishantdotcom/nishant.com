export default function Home() {
  return (
    <>
      <div className=" flex justify-between bg-darkNavy  shadow-2xl bg-opacity-60 backdrop-filter: blur(20px);">
        <div className=" font-mono w-1/2   font-bold text-xl text-[#2d3748] p-6  ml-10px">
          NK
        </div>
        <div className="  font-mono w-1/2  p-6   flex justify-around gap-x-10">
          <div className=" flex">
            <div className="font-semibold px-2 text-black">01. </div>
            <div className="font-semibold hover:text-red-400"> Skills</div>
          </div>
          <div className=" flex">
            <div className="font-semibold px-2 text-black">02. </div>
            <div className="font-semibold"> Projects</div>
          </div>
          <div className=" flex">
            <div className="font-semibold px-2 text-black">03. </div>
            <div className="font-semibold"> Experience</div>
          </div>
          <div className=" flex">
            <div className="font-semibold px-2 text-black">04. </div>
            <div className="font-semibold"> Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}
