"use client";

import { context } from "@/context/provider";
import { Dispatch, SetStateAction, useContext } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const AddToSaveButton = ({ data }: { data: IData }) => {
  const { save, setSave, saveCount, setSaveCount } = useContext(context) as {
    save: IData[];
    setSave: Dispatch<SetStateAction<IData[]>>;
    saveCount: number;
    setSaveCount: Dispatch<SetStateAction<number>>;
  };
  const isAlreadyAdded = save.some((item) => item.id === data.id);

  const {
    saveExercises,
    setSaveExercises,
    saveMinutes,
    setSaveMinutes,
    saveCalories,
    setSaveCalories,
  } = useContext(context) as {
    saveExercises: number;
    setSaveExercises: Dispatch<SetStateAction<number>>;

    saveMinutes: number;
    setSaveMinutes: Dispatch<SetStateAction<number>>;

    saveCalories: number;
    setSaveCalories: Dispatch<SetStateAction<number>>;
  };

  const handelSaveButton = () => {
    if (isAlreadyAdded) return;

    setSave([...save, data]);
    setSaveCount(saveCount + 1);

    setSaveExercises(saveExercises + 1);
    setSaveMinutes(saveMinutes + data.duration);
    setSaveCalories(saveCalories + data.caloriesBurned);
    toast.success("Successfully saved for later!");
  };

  return (
    <div>
      <button
        disabled={isAlreadyAdded}
        onClick={() => handelSaveButton()}
        // className="mr-10 font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 cursor-pointer"
        className={`mr-10 font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 ${
          isAlreadyAdded
            ? "bg-gray-300 text-black cursor-not-allowed"
            : " text-black cursor-pointer"
        }`}
      >
        {" "}
        <FaRegBookmark /> Save for later{" "}
      </button>
    </div>
  );
};

export default AddToSaveButton;
