import { useState } from "react";
import Button from "@/components/Button";
import NewsletterIcon from "@/public/icon/Newsletter";

export default function Newsletter() {
  const [subscriberEmail, setSubscriberEmail] = useState("");



  return (
    <div className="flex-col mx-6 px-6 pt-4 lg:flex-row  bg-gray-100 lg:h-40 relative z-20 -mb-16 lg:container lg:items-center lg:justify-between lg:mx-auto mt-10 lg:mt-20 lg:py-14 flex rounded-md">
      <div className="column-1 mx-auto justify-center lg:mx-0 w-full lg:w-1/4 flex items-center">
        <NewsletterIcon />
        <h4 className="w-full text-md ml-2 lg:w-2/3 lg:ml-4 lg:text-xl font-bold">
          SIGN UP FOR NEWSLETTER
        </h4>
      </div>
      <hr className="bg-gray-300 hidden lg:flex mr-8 w-0.5 h-full " />
      <div className="column-2  lg:flex hidden">
        <p className="font-bold">
          Subscribe to the weekly newsletter for all the latest updates
        </p>
      </div>
      <form className="w-full my-4 lg:my-0 lg:w-3/5 flex">
        <input
          name="email"
          placeholder="Email"
          className="p-2 lg:p-3 lg:pl-4 w-full rounded-l-lg"
          required
        />
        <Button
          text="Subscribe"
          type="submit"
          className="bg-blue-900 rounded-r-lg p-2 lg:p-3 px-4  text-white hover:opacity-80"
        />
      </form>
    </div>
  );
}
