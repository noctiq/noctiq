import { FC, ReactNode } from "react";

import Navbar from "@/features/auth/components/layouts/navbar";

interface ILayoutsProps {
  children: ReactNode;
}

const Layouts: FC<ILayoutsProps> = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col">
      <Navbar type={"sign up"} />
      {children}
    </div>
  );
};

export default Layouts;
