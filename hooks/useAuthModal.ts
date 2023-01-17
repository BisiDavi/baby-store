import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useRouter } from "next/router";

import useUI from "@/hooks/useUI";
import useFirebase from "@/hooks/useFirebase";

export default function useAuthModal() {
  const { authModalHandler, authModal } = useUI();

  const { googleProvider, getAuthdetails } = useFirebase();
  const router = useRouter();
  const userDetails = getAuthdetails();

  const modalState =
    router.route === "/checkout" && !userDetails ? true : authModal;
  const modalHandler =
    router.route === "/checkout" && !userDetails
      ? () => null
      : authModalHandler;

  if (!modalState) {
    enableBodyScroll(document.body);
  } else {
    disableBodyScroll(document.body);
  }

  return {
    modalState,
    modalHandler,
    googleProvider,
  };
}
