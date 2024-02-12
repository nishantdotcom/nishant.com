export default function Home() {
  return (
    <>
      <div className=" flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className=" font-monow-1/2   p-6  ml-10px"> NK</div>
        <div className="  font-mono w-1/2  p-6   flex justify-around gap-x-10">
          <div className=" flex">
            <div className="font-semibold px-2 text-black">01. </div>
            <div className="font-semibold"> Skills</div>
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
