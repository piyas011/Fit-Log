import Link from "next/link";

const Empty = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-4 text-center sm:px-6">
      <h2 className="text-2xl font-semibold tracking-[-1px] sm:text-3xl sm:tracking-[-1.5px] md:text-4xl md:tracking-[-2px]">
        NOTHING HERE YET
      </h2>

      <p className="my-3 max-w-md text-sm leading-6 text-[#9CA3AF] sm:my-4 sm:text-base">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="rounded-2xl bg-[#C2F800] px-6 py-2.5 text-sm font-medium text-black transition hover:scale-105 sm:px-8 sm:py-3 sm:text-base"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default Empty;
