import type { AppProps } from "next/app";
import ProviderLayout from "@/layout/ProviderLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderLayout>
      <Component {...pageProps} />
    </ProviderLayout>
  );
}
