import CategoryTabView from "@/components/CategoryTabView";

export default function TopCategories() {
  return (
    <div className="bg-white my-6 px-4 py-6 lg:px-0">
      <h3 className="text-2xl lg:text-3xl text-center font-medium">
        Top Categories
      </h3>
      <p className="text-center px-2 lg:px-0 my-3 lg:w-2/3 flex mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="container mt-4 mx-auto">
        <CategoryTabView />
      </div>
    </div>
  );
}
