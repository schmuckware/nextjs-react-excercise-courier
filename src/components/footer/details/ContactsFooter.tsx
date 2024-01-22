"use client";
import { usePathname } from "next/navigation";

const ContactsFooter = () => {
  if (usePathname() !== "/kontakt") return null;
  return (
    <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
      <div className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
        <h2 className="text-4xl font-bold md:text-2xl">
          {" "}
          Und wenn Sie keine Formulare mögen, schicken Sie mir einfach eine
          E-Mail{" "}
        </h2>
      </div>
      <div className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
        <div className="mb-4 flex max-w-[272px] items-start justify-start">
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e257ec977d799ff999_MapPin-2.svg"
            alt=""
            className="mr-3 inline-block"
          />
          <p className="text-[#636262] max-[479px]:text-sm">
            {" "}
            8502 Preston Rd. Inglewood, Maine 98380, USA{" "}
          </p>
        </div>
        <div className="mb-4 flex max-w-[272px] items-start justify-start">
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg"
            alt=""
            className="mr-3 inline-block"
          />
          <p className="text-[#636262] max-[479px]:text-sm">
            {" "}
            {/* Create a constants.ts file that includes all data that might change */}
            support@flowspark.co{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsFooter;
