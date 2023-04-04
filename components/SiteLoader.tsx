/* eslint-disable @next/next/no-img-element */
export default function SiteLoader() {
  return (
    <div className="view">
      <img src="/cart-loader.gif" className="loader" alt="loader" />
      <style jsx>
        {`
          .loader {
            margin: auto;
            border-radius: 50%;
            height: 100px;
            width: 100px;
            border: 1px solid gray;
          }
          .view {
            height: 100vh;
            display: flex;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}
