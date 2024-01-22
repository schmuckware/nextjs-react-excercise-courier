"use client";
import { ReactNode, useState } from "react";

interface TooltipProps {
  children: ReactNode;
  isActive: boolean;
  // Allows only one Tooltip to be active at a time
  onShow: () => void;
  // Clicking on the close button closes the Tooltip
  onClose: () => void;
}

const Tooltip = ({ children, isActive, onShow, onClose }: TooltipProps) => {
  return (
    <section>
      <div className="flex h-[100vh] items-center justify-center">
        <div className="relative">
          {isActive && (
            <div className="absolute bottom-[170%] left-1/2 -translate-x-1/2 gap-4">
              <div className="relative w-[90vw] max-w-sm flex-col items-start gap-4 rounded-md bg-[#f2f2f7] p-6 md:max-w-[240px] border-black border-2">
                <p className="text-sm text-[#636262] xs:text-base">
                  {children}
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    className="rounded-md bg-black px-6 py-3 font-semibold text-white"
                    onClick={onClose}
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
          )}
          <div>
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6489873134f4996d88414bc6_Info.svg"
              alt=""
              className="inline-block cursor-pointer"
              onClick={onShow}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tooltip;
