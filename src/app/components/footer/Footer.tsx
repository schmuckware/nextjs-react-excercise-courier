const Footer = () => {
  return (
    <footer className="dark:text-white dark:bg-gray-900 block">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
        <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 xs:text-center">
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal transition hover:text-[#276EF1] xs:py-2 xs:pr-6 lg:pr-12"
            >
              Über uns
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal transition hover:text-[#276EF1] xs:py-2 xs:pr-6 lg:pr-12"
            >
              Impressum
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 font-normal transition hover:text-[#276EF1] xs:py-2 xs:pr-6 lg:pr-12"
            >
              Datenschutz
            </a>
          </div>
          <div className="max-[991px]:flex-none">
            <p className="max-[479px]:text-sm">
              {" "}
              © No copyright 2024. No rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
