import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-[#ffffff3b] bg-[#00000050] px-4 py-4 text-center sm:flex-row sm:gap-5 sm:px-6 sm:text-left">
      <div>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-sm font-medium sm:justify-start"
        >
          <Image src="/favicon.png" width={20} height={20} alt="FitLog Icon" />
          FITLOG
        </Link>
      </div>

      <div>
        <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs leading-5 text-[#00000096] sm:justify-end sm:text-sm">
          <span>© 2026 FitLog —</span>
          <span>Workout Library.</span>
          <span>Train hard, log honest.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
