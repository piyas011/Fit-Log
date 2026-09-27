import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" h-auto md:h-120.5 bg-[#00000050] mt-30 p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center container mx-auto gap-5  ">
      <div className=" p-4 ">
        <p className="text-[14px] font-bold text-[#C2F800]">WORKOUT LIBRARY</p>
        <h1 className="text-5xl font-bold mb-4 leading-15 my-4 tracking-[-2px]">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button className="mt-4  bg-[#C2F800] text-black font-bold px-4 py-2 rounded-lg text-[16px] cursor-pointer">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/banner.png"
          width={350}
          height={350}
          alt="Banner Images"
        />
      </div>
    </div>
  );
};

export default HeroSection;
