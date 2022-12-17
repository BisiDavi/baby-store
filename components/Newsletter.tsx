import Button from "@/components/Button";

export default function Newsletter() {
  return (
    <div>
      <div className="column-1">
        <div className="icon"></div>
        <h4>SIGN UP FOR NEWSLETTER</h4>
      </div>
      <div className="column-2">
        <p>Subscribe to the weekly newsletter for all the latest updates</p>
      </div>
      <form>
        <input name="email" placeholder="Email" className="" />
        <Button text="Subscribe" type="submit" className="" />
      </form>
    </div>
  );
}
