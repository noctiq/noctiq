import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface INavbarProps {
  type: "sign up" | "login";
}

const Navbar: FC<INavbarProps> = ({ type }) => {
  return (
    <header className="sticky top-0 right-0 left-0">
      <div className="flex items-center justify-between py-4">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src={"/logo.svg"}
              alt={"Noctiq Logo"}
              width={60}
              height={60}
              priority
            />
            <span className="inline-block scale-y-125 transform text-2xl font-black">
              Noctiq
            </span>
          </div>
          <span className="-mt-2.5 block pl-1.5 text-xs font-medium">
            The ultimate app for teams.
          </span>
        </Link>
        {type === "login" ? (
          <div className="flex items-center gap-4">
            <span className="hidden text-[15px] leading-3 sm:inline-block">
              Don&apos;t have an account?
            </span>
            <Link
              href={"/signup"}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#6d1dff] px-5 text-sm font-bold tracking-[0.4px] text-white shadow-[0_10px_25px_#baa9ff] transition-colors duration-300 hover:bg-[#5409da]"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="hidden text-[15px] leading-3 sm:inline-block">
              Already have an account?
            </span>
            <Link
              href={"/login"}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#6d1dff] px-5 text-sm font-bold tracking-[0.4px] text-white shadow-[0_10px_25px_#baa9ff] transition-colors duration-300 hover:bg-[#5409da]"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
