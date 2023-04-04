import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import SpinnerRipple from "@/components/SpinnerRipple";
import store from "@/redux/store";

import "react-toastify/dist/ReactToastify.css";

const NextNProgress = dynamic(
  () => import(/* webpackChunkName: 'NProgress' */ "@/components/NProgress")
);

export default function ProviderLayout({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<SpinnerRipple centerRipple />}
        persistor={persistor}
      >
        <QueryClientProvider client={queryClient}>
          <NextNProgress
            color="#f54c4c"
            height={5}
            options={{ showSpinner: true }}
          />
          <ToastContainer />
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
