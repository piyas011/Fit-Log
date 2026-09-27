"use client";

import { context } from "@/context/provider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const HeaderSection = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { planCount, saveCount } = useContext(context) as {
    planCount: number;
    saveCount: number;
  };

  const handelToggleMenu = (menuClicked: boolean) => {
    setMenuOpen(menuClicked);
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-[#0505053b]  ">
      <div className="container mx-auto px-4 sm:px-6">
        {/* ================= MAIN NAVBAR ================= */}
        <div className="flex h-20 items-center justify-between">
          {/* ================= LOGO ================= */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold sm:text-2xl"
            >
              <Image
                src="/favicon.png"
                alt="FitLog Logo"
                width={35}
                height={35}
              />
              FITLOG
            </Link>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className={`rounded-4xl px-4 py-2 transition ${
                pathName === "/"
                  ? "bg-[#4a5243] text-[#C2F800]"
                  : "hover:bg-[#ffffff10]"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/myPlan"
              className={`rounded-4xl px-4 py-2 transition ${
                pathName === "/myPlan"
                  ? "bg-[#4a5243] text-[#C2F800]"
                  : "hover:bg-[#ffffff10]"
              }`}
            >
              My Plan
            </Link>
          </nav>

          {/* ================= DESKTOP PLAN / SAVED ================= */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link href="/myPlan">
              <button
                className="
              cursor-pointer
              rounded-2xl
              border border-gray-200
              px-3 py-1.5
              text-sm
              transition
              hover:bg-[#ffffff10]
              sm:px-4
              sm:text-base
            "
              >
                Plan
                <span
                  className="
                ml-2
                rounded-full
                bg-[#C2F800]
                px-2 py-1
                font-bold
                text-black
              "
                >
                  {planCount}
                </span>
              </button>
            </Link>

            <Link href="/myPlan">
              <button
                className="
              cursor-pointer
              rounded-2xl
              border border-gray-200
              px-3 py-1.5
              text-sm
              transition
              hover:bg-[#ffffff10]
              sm:px-4
              sm:text-base
            "
              >
                Saved
                <span
                  className="
                ml-2
                rounded-full
                bg-[#C2F800]
                px-2 py-1
                font-bold
                text-black
              "
                >
                  {saveCount}
                </span>
              </button>
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => handelToggleMenu(!menuOpen)}
            className="flex cursor-pointer items-center text-2xl sm:hidden"
          >
            {menuOpen ? <MdClose /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-[#ffffff1c] py-5 sm:hidden">
            {/* Mobile Navigation */}
            <nav className="flex flex-col items-center gap-2 ">
              <Link
                href="/"
                onClick={() => handelToggleMenu(false)}
                className={`w-full rounded-xl px-4 py-3 text-center transition border border-black  ${
                  pathName === "/" ? " text-[#C2F800]" : "hover:bg-[#ffffff10]"
                }`}
              >
                Workouts
              </Link>

              <Link
                href="/myPlan"
                onClick={() => handelToggleMenu(false)}
                className={`w-full rounded-xl px-4 py-3 text-center transition border border-black ${
                  pathName === "/myPlan"
                    ? " text-[#C2F800]"
                    : "hover:bg-[#ffffff10]"
                }`}
              >
                My Plan
              </Link>
            </nav>

            {/* Mobile Plan / Saved */}
            <div className="mt-4 flex justify-center gap-2 border-t border-[#ffffff1c] pt-4">
              <Link href="/myPlan">
                <button
                  onClick={() => handelToggleMenu(false)}
                  className="
                cursor-pointer
                rounded-2xl
                border border-gray-200
                px-4 py-2
                text-sm
              "
                >
                  Plan
                  <span
                    className="
                  ml-2
                  rounded-full
                  bg-[#C2F800]
                  px-2 py-1
                  font-bold
                  text-black
                "
                  >
                    {planCount}
                  </span>
                </button>
              </Link>

              <Link href="/myPlan">
                <button
                  onClick={() => handelToggleMenu(false)}
                  className="
                cursor-pointer
                rounded-2xl
                border border-gray-200
                px-4 py-2
                text-sm
              "
                >
                  Saved
                  <span
                    className="
                  ml-2
                  rounded-full
                  bg-[#C2F800]
                  px-2 py-1
                  font-bold
                  text-black
                "
                  >
                    {saveCount}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
