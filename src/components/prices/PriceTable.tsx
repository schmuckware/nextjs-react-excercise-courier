import data from "@/data.json";
import Tooltip from "../Tooltip";

const PriceTable = () => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Simple & Affordable Pricing
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-20 lg:mb-28">
              Simple & fixed pricing. 30 days money-back guarantee
            </p>
          </div>

          <div
            // TODO: So wie hier den dark mode einbauen
            className="block xs:hidden font-medium p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
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
                <p className="text-sm font-semibold">Auf Minutenbasis</p>
              </div>
              <div className="">
                <p className="xs:text-xl md:text-3xl font-bold">Kombi</p>
                <p className="text-sm font-semibold">Auf Minutenbasis</p>
              </div>
            </div>

            {Object.keys(data.preise.aufMinutenbasis).map((rowName) => (
              <div
                className="grid xs:grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)]"
                key={rowName}
              >
                <div className="flex items-center">
                  <p className="md:font-semibold xs:font-medium xs:text-sm">
                    {rowName}
                  </p>
                  <div className="ml-2">
                    <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                      <Tooltip>
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
                        {
                          data.preise.aufMinutenbasis[rowName][fahrzeugType]
                            .preis
                        }{" "}
                        €
                      </p>
                    </div>
                  )
                )}
              </div>
            ))}

            <div className="grid xs:grid-cols-[1.2fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] gap-8 pt-8">
              <div></div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceTable;
