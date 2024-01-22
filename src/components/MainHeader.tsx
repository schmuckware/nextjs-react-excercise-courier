import config from "@/data.json";
import { ReactNode } from "react";

interface MainHeaderProps {
  header: string;
  children?: ReactNode;
}

const MainHeader = ({ header, children }: MainHeaderProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold md:text-5xl">{header}</h2>
      <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
        {children}
      </p>
    </>
  );
};

export default MainHeader;
