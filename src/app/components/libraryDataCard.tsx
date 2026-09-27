import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

interface IDataPropsTypes {
  data: IData;
}

const LibraryDataCard = ({ data }: IDataPropsTypes) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    id,
  } = data;
  return (
    <Link
      href={`/${id}`}
      className="h-fit rounded-4xl border border-[#80808096] bg-[#ffffff1c] duration-300 hover:border-[#C2F800]"
    >
      <div className="relative h-55 w-full sm:h-60 md:h-65 lg:h-70">
        <Image
          className="rounded-t-4xl object-cover"
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 
           (max-width: 1024px) 50vw, 
           33vw"
        />
      </div>

      <div className="p-4 sm:p-5 col-span-1">
        <div className="my-2 flex flex-wrap gap-2 sm:gap-3">
          {muscleGroups.map((group) => (
            <p
              className="rounded-4xl bg-[#C2F800] px-2.5 py-1 text-xs font-bold text-black sm:px-3 sm:text-sm"
              key={group}
            >
              {group}
            </p>
          ))}
        </div>

        <h2 className="text-lg font-bold sm:text-[20px]">
          {name.toUpperCase()}
        </h2>

        <p className="my-2 text-sm text-[#9CA3AF] sm:text-base">{equipment}</p>

        <hr className="mb-4 border-[#80808096] sm:mb-5" />

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#9CA3AF] sm:gap-5 sm:text-sm">
          <p className="flex items-center gap-1.5 sm:gap-2">
            <IoMdTime />
            {duration} min
          </p>

          <p className="flex items-center gap-1.5 sm:gap-2">
            <PiFireSimpleFill />
            {caloriesBurned} kcal
          </p>

          <p className="flex items-center gap-1.5 sm:gap-2">
            <FaRegStar />
            {rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LibraryDataCard;
