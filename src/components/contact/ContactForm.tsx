import config from "@/config";
import MainHeader from "../MainHeader";

const header = "Kontakt aufnehmen";

const ContactForm = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
          <MainHeader header={header}>
            Oder rufen Sie mich direkt an unter{" "}
            <a
              href={`tel:${config.telefonnummer}`}
              className="underline hover:text-blue-800"
            >
              {config.telefonnummer}
            </a>
          </MainHeader>
          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-left sm:px-4 md:px-20"
          >
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-2" className="mb-1 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="name-3" className="mb-1 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="field" className="mb-1 font-medium">
                E-Mail
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                // TODO: Add client side verification with regex
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-8">
              <label htmlFor="field" className="mb-1 font-medium">
                Message
              </label>
              <textarea
                placeholder=""
                name="field"
                className="mb-2.5 block h-auto min-h-[186px] w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-[#333333]"
                // TODO: Add client side verification
              >
                {" "}
              </textarea>
            </div>
            {/* Mobile style switch button for privacy policy */}
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-4 inline-block cursor-pointer text-sm">
                By selecting this, you agree to the
                <a href="impressum">
                  {" "}
                  {/* TODO: Add requirement to be pressed here and fix the link */}
                  <span className="underline hover:text-blue-800">
                    Privacy Policy
                  </span>
                </a>
              </span>
            </label>
            <input
              type="submit"
              value="Join Flowspark"
              className="inline-block w-full cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
