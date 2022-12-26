import TopProductTabs from "@/components/TopProductTabs";

export default function TopProduct() {
  return (
    <div className="bg-white">
      <h3 className="text-2xl  text-center font-bold">Top Product</h3>
      <p className="text-center my-3 w-2/3 flex mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="container mt-4 mx-auto">
        <TopProductTabs />
      </div>
    </div>
  );
}
