"use client";
import { useState } from "react";
import data from "@/config/data.json";
import Tooltip from "../Tooltip";

const PriceTable = () => {
  // State hook to keep track of the active tooltip
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="dark:text-white dark:bg-gray-900 ">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Transparent & Günstig
          </h2>
          <p className="dark:text-gray-400 mx-auto mb-8 mt-4 max-w-lg md:mb-20 lg:mb-28">
            Nur so lange wie nötig, nur so teuer wie nötig.
          </p>
        </div>

        <div
          className="block xs:hidden font-medium p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400"
          role="alert"
        >
          Hier sollte eigentlich eine Tabelle mit den Preisen sein, aber ihr
          Screen ist zu klein.
        </div>

        {/* Start of Table */}
        <div className="hidden text-center xs:block">
          <div className="grid xs:grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] gap-4">
            <div className=""></div>
            <div className="">
              <p className="xs:text-xl md:text-3xl font-bold">Transporter</p>
              <p className="dark:text-gray-400 text-sm font-semibold">
                Auf 15-Minutenbasis
              </p>
            </div>
            <div className="">
              <p className="xs:text-xl md:text-3xl font-bold">Kombi</p>
              <p className="dark:text-gray-400 text-sm font-semibold">
                Auf 15-Minutenbasis
              </p>
            </div>
          </div>

          {Object.keys(data.preise.aufMinutenbasis).map((rowName, index) => (
            <div
              className="grid xs:grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)]"
              key={rowName}
            >
              <div className="flex items-center">
                <p className="md:font-semibold xs:font-medium xs:text-sm">
                  {rowName}
                </p>
                <div className="ml-2">
                  <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] text-xs font-bold">
                    <Tooltip
                      isActive={activeIndex === index}
                      onShow={() => setActiveIndex(index)}
                      onClose={() => setActiveIndex(-1)}
                    >
                      {
                        data.preise.aufMinutenbasis[rowName]["Transporter"]
                          .hinweis
                      }
                    </Tooltip>
                  </div>
                </div>
              </div>
              {Object.keys(data.preise.aufMinutenbasis[rowName]).map(
                (fahrzeugType) => (
                  <div key={fahrzeugType}>
                    <p>
                      {data.preise.aufMinutenbasis[rowName][fahrzeugType].preis}{" "}
                      €
                    </p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
