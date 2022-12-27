import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const NextNProgress = dynamic(
  () => import(/* webpackChunkName: 'NProgress' */ "@/components/NProgress")
);

export default function ProviderLayout({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextNProgress
        color="#f54c4c"
        height={5}
        options={{ showSpinner: true }}
      />
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
