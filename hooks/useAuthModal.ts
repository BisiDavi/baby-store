import { useRouter } from "next/router";

import useUI from "@/hooks/useUI";
import useFirebase from "@/hooks/useFirebase";

export default function useAuthModal() {
  const { authModalHandler, authModal } = useUI();

  const { googleProvider, getAuthdetails } = useFirebase();
  const router = useRouter();
  const userDetails = getAuthdetails();

  console.log("router", router);

  const modalState =
    router.route === "/checkout" && !userDetails ? true : authModal;
  const modalHandler =
    router.route === "/checkout" && !userDetails
      ? () => null
      : authModalHandler;

  return {
    modalState,
    modalHandler,
    googleProvider,
  };
}
