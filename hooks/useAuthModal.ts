import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRouter } from "next/router";

import useUI from "@/hooks/useUI";
import useFirebase from "@/hooks/useFirebase";
import { useAppSelector } from "@/redux/store";

export default function useAuthModal() {
  const { authModalHandler, authModal } = useUI();
  const { auth } = useAppSelector((state) => state.auth);

  const { googleProvider } = useFirebase();
  const router = useRouter();

  console.log("authModal", authModal);

  const modalState = router.route === "/checkout" && !auth ? true : authModal;
  const modalHandler =
    router.route === "/checkout" && !auth ? () => null : authModalHandler;

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
