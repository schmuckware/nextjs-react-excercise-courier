export default function Home() {
  return (
    <main>
      <>
        <header>
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="grid items-center justify-items-start gap-8 xs:gap-20 lg:grid-cols-2">
              <div className="flex flex-col">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                  The Website You Want Without The Dev Time.
                </h1>
                <p className="mb-6 max-w-lg text-sm text-[#636262] xs:text-xl md:mb-10 lg:mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus
                </p>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="flex max-w-full items-center font-bold"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                      alt=""
                      className="mr-2 inline-block max-h-4 w-5"
                    />
                    <p>Preise ansehen</p>
                  </a>
                </div>
              </div>
              {/* TODO: Hier im Darkmode ein nächtliches AI Bild mit Kourierfahrer durch HH und im hellen Mode dann bei Tageslicht */}
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg"
                alt=""
                className="inline-block h-full w-full max-w-[640px]"
              />
            </div>
          </div>
        </header>
      </>
    </main>
  );
}
