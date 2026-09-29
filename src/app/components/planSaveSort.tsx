import { context } from "@/context/provider";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import TodaysPlan from "./todyPlan";
import Save from "./save";
const PlanSaveSort = () => {
  const active = "border-[#9ca3af7c] text-black bg-[#9ca3af56]";
  const { setActiveTab } = useContext(context) as {
    plan: IData[];
    setActiveTab: Dispatch<SetStateAction<"tody" | "save">>;
  };
  const [click, setClick] = useState<"tody" | "save">("tody");
  type clickType = "tody" | "save";
  const handelClickButton = (userClick: clickType) => {
    setClick(userClick);
    setActiveTab(userClick);
  };
  return (
    <div className="w-full">
      {" "}
      {/* Tabs + Sorting */}{" "}
      <div className="flex w-full flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
        {" "}
        {/* Tabs */}{" "}
        <div className="my-4 inline-flex w-full max-w-full justify-center rounded-[10px] border p-1.5 text-black sm:my-10 sm:w-auto">
          {" "}
          <button
            onClick={() => handelClickButton("tody")}
            className={`w-1/2 cursor-pointer rounded-[10px] px-4 py-2.5 text-sm transition sm:w-auto sm:px-8 sm:py-3 sm:text-base ${click === "tody" ? active : ""}`}
          >
            {" "}
            Today&apos;s Plan{" "}
          </button>{" "}
          <button
            onClick={() => handelClickButton("save")}
            className={`w-1/2 cursor-pointer rounded-[10px] px-4 py-2.5 text-sm transition sm:w-auto sm:px-8 sm:py-3 sm:text-base ${click === "save" ? active : ""}`}
          >
            {" "}
            Saved{" "}
          </button>{" "}
        </div>{" "}
        {/* Sorting */}{" "}
        <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">
          {" "}
          <label htmlFor="sort" className="shrink-0 font-medium">
            {" "}
            Sort By{" "}
          </label>{" "}
          <select
            id="sort"
            className="w-full max-w-50 cursor-pointer rounded-lg border border-[#000000] bg-white px-4 py-2 text-black outline-none sm:w-50"
          >
            {" "}
            <option value="Duration">Duration</option>{" "}
            <option value="Calories">Calories</option>{" "}
            <option value="Rating">Rating</option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="w-full rounded-2xl border border-dashed border-[#9ca3af63] p-3 sm:p-4">
        {" "}
        <div className="w-full min-w-0">
          {" "}
          {click === "tody" ? <TodaysPlan /> : <Save />}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default PlanSaveSort;
