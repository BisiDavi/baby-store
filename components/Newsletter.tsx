import Button from "@/components/Button";
import NewsletterIcon from "@/public/icon/Newsletter";

export default function Newsletter() {
  return (
    <div className="bg-gray-100 h-40 relative z-20 -mb-16 container items-center justify-between mx-auto mt-20 p-10 py-14 flex rounded-md">
      <div className="column-1 w-1/4 flex items-center">
        <NewsletterIcon />
        <h4 className="w-2/3 ml-4 text-xl font-bold">SIGN UP FOR NEWSLETTER</h4>
      </div>
      <hr className="bg-gray-300 mr-8 w-0.5 h-full " />
      <div className="column-2">
        <p className="font-bold">
          Subscribe to the weekly newsletter for all the latest updates
        </p>
      </div>
      <form className="w-3/5 flex">
        <input
          name="email"
          placeholder="Email"
          className="p-3 pl-4 w-full rounded-l-lg"
        />
        <Button
          text="Subscribe"
          type="submit"
          className="bg-blue-900 rounded-r-lg p-3 px-4  text-white hover:opacity-80"
        />
      </form>
    </div>
  );
}
