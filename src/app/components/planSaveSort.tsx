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
      {/* Tabs + Sorting */}
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {/* Tabs */}
        <div className="my-6 inline-flex max-w-full rounded-[10px] border p-1.5 text-black sm:my-10">
          <button
            onClick={() => handelClickButton("tody")}
            className={`cursor-pointer rounded-[10px] px-4 py-2.5 text-sm transition sm:px-8 sm:py-3 sm:text-base ${
              click === "tody" ? active : ""
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => handelClickButton("save")}
            className={`cursor-pointer rounded-[10px] px-4 py-2.5 text-sm transition sm:px-8 sm:py-3 sm:text-base ${
              click === "save" ? active : ""
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sorting */}
        <div className="flex w-50 items-center gap-2">
          <label htmlFor="sort" className="font-medium">
            Sort By
          </label>

          <select className="rounded-lg border border-[#000000] bg-white px-4 py-2 text-black outline-none">
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="w-full rounded-2xl border border-dashed border-[#9ca3af63] p-3 sm:p-4">
        <div className="w-full min-w-0">
          {click === "tody" ? <TodaysPlan /> : <Save />}
        </div>
      </div>
    </div>
  );
};

export default PlanSaveSort;
