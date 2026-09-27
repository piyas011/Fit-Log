"use client";

import { createContext, ReactNode, useState } from "react";

export const context = createContext({});

const Provider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);
  const [planCount, setPlanCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  // /////////////////////
  const [saveExercises, setSaveExercises] = useState(0);
  const [saveMinutes, setSaveMinutes] = useState(0);
  const [saveCalories, setSaveCalories] = useState(0);
  // /////////////////////
  const [activeTab, setActiveTab] = useState<"tody" | "save">("tody");
  //   console.log(plan, "main provider plan");
  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
    planCount,
    setPlanCount,
    saveCount,
    setSaveCount,
    exercises,
    setExercises,
    minutes,
    setMinutes,
    calories,
    setCalories,
    saveExercises,
    setSaveExercises,
    saveMinutes,
    setSaveMinutes,
    saveCalories,
    setSaveCalories,
    activeTab,
    setActiveTab,
  };

  return <context.Provider value={sharedData}>{children}</context.Provider>;
};

export default Provider;
