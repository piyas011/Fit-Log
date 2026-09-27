"use client";

import { context } from "@/context/provider";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";

const AddToTodaysPlanButton = ({ data }: { data: IData }) => {
  const { plan, setPlan, planCount, setPlanCount } = useContext(context) as {
    plan: IData[];
    setPlan: Dispatch<SetStateAction<IData[]>>;
    planCount: number;
    setPlanCount: Dispatch<SetStateAction<number>>;
  };
  const isAlreadyAdded = plan.some((item) => item.id === data.id);

  const {
    exercises,
    setExercises,
    minutes,
    setMinutes,
    calories,
    setCalories,
  } = useContext(context) as {
    exercises: number;
    setExercises: Dispatch<SetStateAction<number>>;

    minutes: number;
    setMinutes: Dispatch<SetStateAction<number>>;

    calories: number;
    setCalories: Dispatch<SetStateAction<number>>;
  };

  const handelTodaysPlan = () => {
    if (isAlreadyAdded) return;

    if (plan.length >= 5) {
      toast.error("Today's plan can contain maximum 5 workouts!");
      return;
    }

    setPlan([...plan, data]);

    setPlanCount(planCount + 1);

    setExercises(exercises + 1);
    setMinutes(minutes + data.duration);
    setCalories(calories + data.caloriesBurned);

    toast.success("Successfully added Today's Plan!");
  };

  return (
    <div>
      <button
        disabled={isAlreadyAdded}
        onClick={() => handelTodaysPlan()}
        className={`mr-10 font-bold py-3 px-5 text-[18px] rounded-lg border border-gray-200 flex justify-center items-center gap-2 ${
          isAlreadyAdded
            ? "bg-gray-300 text-black cursor-not-allowed opacity-60"
            : "bg-[#CCFF00] text-black cursor-pointer hover:bg-[#bce600]"
        }`}
      >
        <CiCalendarDate /> Add to today&apos;s plan
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddToTodaysPlanButton;
