"use client";
import { context } from "@/context/provider";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import EmptyPlan from "./empty";
import { toast } from "react-toastify";

const Save = () => {
  const {
    save,
    setSave,
    saveCount,
    setSaveCount,
    saveExercises,
    setSaveExercises,
    saveMinutes,
    setSaveMinutes,
    saveCalories,
    setSaveCalories,
  } = useContext(context) as {
    save: IData[];
    setSave: Dispatch<SetStateAction<IData[]>>;
    saveCount: number;
    setSaveCount: Dispatch<SetStateAction<number>>;
    saveExercises: number;
    setSaveExercises: Dispatch<SetStateAction<number>>;
    saveMinutes: number;
    setSaveMinutes: Dispatch<SetStateAction<number>>;
    saveCalories: number;
    setSaveCalories: Dispatch<SetStateAction<number>>;
  };

  const handelRemove = (data: IData) => {
    setSaveCount(saveCount - 1);
    setSave((prev) => prev.filter((item) => item.id !== data.id));
    setSaveExercises(saveExercises - 1);
    setSaveMinutes(saveMinutes - data.duration);
    setSaveCalories(saveCalories - data.caloriesBurned);
    toast.success(`${data.name} removed from saved!`);
  };

  return (
    <div className="space-y-3">
      {save.length === 0 ? (
        <EmptyPlan />
      ) : (
        <div>
          {save.map((data) => (
            <div
              key={data.id}
              className="mb-3 rounded-lg bg-[#00000c10] p-3 sm:p-4"
            >
              {/* Main Content */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Image */}
                <div className="h-44 w-full shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-36 md:h-30 md:w-44 lg:w-50">
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xl font-bold uppercase text-black sm:text-xl md:text-2xl">
                    {data.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#00000ccc] sm:text-base">
                    {data.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[#CCFF00]" />
                      {data.duration}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaFire className="text-[#CCFF00]" />
                      {data.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <FaStar className="text-[#CCFF00]" />
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#ffffff1c] pt-3 sm:justify-end">
                <Link
                  href={`/${data.id}`}
                  className="rounded-2xl border border-zinc-400 px-3 py-1.5 text-sm text-black transition hover:border-zinc-500 sm:text-base"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handelRemove(data)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-black transition hover:bg-red-500/10 hover:text-red-400"
                >
                  <IoClose className="text-2xl " />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Save;
