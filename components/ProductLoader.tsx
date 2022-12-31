import ContentLoader from "react-content-loader";
import type { IContentLoaderProps } from "react-content-loader";

export function ProductLoaderItem(
  props: IContentLoaderProps &
    JSX.IntrinsicAttributes & { children?: React.ReactNode }
) {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#b5a6a6"
      foregroundColor="#ecebeb"
      className="my-2 flex flex-col"
      {...props}
    >
      <rect x="3" y="15" rx="3" ry="3" width="90%" height="200" />
      <rect x="15%" y="230" rx="3" ry="3" width="60%" height="8" />
      <rect x="20%" y="250" rx="3" ry="3" width="50%" height="8" />
      <rect x="25%" y="270" rx="3" ry="3" width="40%" height="8" />
    </ContentLoader>
  );
}

export default function ProductLoader() {
  const dummyProducts = new Array(4).fill(0);

  return (
    <div className="grid grid-cols-2 lg:flex container mx-auto items-center justify-center">
      {dummyProducts.map((_, index) => (
        <ProductLoaderItem key={index} />
      ))}
    </div>
  );
}
