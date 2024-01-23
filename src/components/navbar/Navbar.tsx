import Link from "next/link";

const Navbar = () => {
  return (
    <section>
      <div className="dark:text-white dark:bg-gray-900 h-auto w-screen">
        <nav
          className="font-inter mx-auto h-auto w-full max-w-[1600px] xs:relative xs:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <div className="flex flex-col px-6 py-6 xs:flex-row xs:items-center xs:justify-between xs:px-10 xs:py-4 xl:px-20">
            <Link href="/">
              <svg
                className="dark:filter dark:invert relative left-5 xs:inset-0 hidden sm:block"
                width="75"
                height="24"
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z"
                  fill="black"
                ></path>
              </svg>
            </Link>
            <div className="mt-14 flex flex-col space-y-8 xs:mt-0 xs:flex xs:flex-row xs:space-x-1 xs:space-y-0">
              <Link
                href="preise"
                className="font-inter rounded-lg xs:px-3 sm:px-6 xs:py-4 xs:hover:bg-gray-300 xs:hover:text-gray-900"
              >
                Preise
              </Link>
              <Link
                href="kontakt"
                className="font-inter rounded-lg xs:px-3 sm:px-6 xs:py-4 xs:hover:bg-gray-300 xs:hover:text-gray-900"
              >
                Kontakt
              </Link>
              <a
                href="#"
                className="font-inter xs: rounded-lg pb-8 xs:px-3 sm:px-6 xs:py-4 xs:hover:bg-gray-300 xs:hover:text-gray-900"
              >
                FAQs
              </a>
            </div>
            {/* TODO: Der hier macht noch die responsiveness kaputt. Austauschen gegen dark mode button. */}
            <div className="flex flex-col space-y-8 xs:flex xs:flex-row xs:space-x-3 xs:space-y-0">
              <a
                className="font-inter rounded-lg bg-black dark:bg-gray-900 px-8 py-4 text-center text-white hover:bg-gray-900 max-w-[122px]"
                href="#"
              >
                Kontakt
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
