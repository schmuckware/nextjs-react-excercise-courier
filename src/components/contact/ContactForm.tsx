import config from "@/data.json";

const header = "Kontakt aufnehmen";

const ContactForm = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold md:text-5xl">Kontakt aufnehmen</h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
            Gerne können Sie mich anrufen unter{" "}
            <a
              href={`tel:${config.telefonnummer}`}
              className="underline hover:text-blue-800"
            >
              {config.telefonnummer}
            </a>
            ,<br></br>
            eine E-Mail schreiben an{" "}
            <a
              href={`mailto:${config.email}`}
              className="underline hover:text-blue-800"
            >
              {config.email}
            </a>
            <br></br>
            oder das folgende Kontaktformular nutzen.
          </p>

          {/* Start contact form */}
          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-left xs:px-4 md:px-20"
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
              ></textarea>
            </div>

            <label className="font-mediume mb-1 flex items-center justify-start pb-4 pl-5">
              <input
                type="checkbox"
                name="checkbox-2"
                className="w-[18px] h-[18px] -ml-[20px] align-middle"
              />
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
