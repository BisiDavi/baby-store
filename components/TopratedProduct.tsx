import products from "@/json/products.json";
import Product from "@/components/Product";

export default function TopratedProduct() {
  return (
    <section className="container mx-auto flex flex-col">
      <h1 className="text-center text-2xl font-bold">Top rated Products</h1>
      <p className="text-center my-3 w-2/3 flex mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="products">
        {products.map((item) => (
          <Product key={item.name} product={item} />
        ))}
      </div>
    </section>
  );
}
