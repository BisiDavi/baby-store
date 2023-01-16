import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";

import useFirebase from "@/hooks/useFirebase";
import axios from "axios";

type dataType = {
  email: string;
  firstName?: string;
  name?: string;
  lastName?: string;
  newsletter: string;
  policy: string;
};

export default function useAuth() {
  const { initFB, writeData } = useFirebase();
  const app = initFB();
  const router = useRouter();

  function getAuthStatus() {
    const auth = getAuth(app);
    const data = {
      ...auth?.currentUser?.providerData[0],
      uid: auth?.currentUser?.uid,
    };
    const user = auth ? data : null;
    return user;
  }

  async function authSignup(data: dataType, password: string) {
    const { email } = data;
    const auth: any = getAuth(app);
    const displayName = router.asPath.includes("/admin")
      ? `${data.name}`
      : `${data.firstName} ${data.lastName}`;

    const dbRoute = router.asPath.includes("/admin") ? "/admin" : "/users";

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(
            "userCredential-createUserWithEmailAndPassword",
            userCredential
          );
          const user = userCredential.user;
          const saveData = {
            user: user.providerData[0],
            name: displayName,
            policy: data.policy,
            newsletter: data.newsletter,
          };
          axios
            .post("/api/email/send-signup-email", {
              email,
              name: displayName,
            })
            .then((response) => console.log("email response", response))
            .catch((err) => console.log("email error", err));
          writeData(JSON.stringify(saveData), `/${dbRoute}/${user.uid}/`);
          if (router.asPath.includes("/admin")) {
            setCookie("admin", true, {
              path: "/",
              sameSite: true,
            });
            router.push("/admin");
          }
        }
      );
      return await updateProfile(auth.currentUser, {
        displayName,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function authSignIn(email: string, password: string) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password).then(() => {
      if (router.asPath.includes("/admin")) {
        setCookie("admin", true, {
          path: "/",
          sameSite: true,
        });
        router.push("/admin");
      }
    });
  }

  function authSignOut() {
    const auth = getAuth(app);
    if (router.asPath.includes("/admin")) {
      setCookie("admin", false, {
        path: "/",
        sameSite: true,
      });
    }
    return signOut(auth);
  }

  function authDetails() {
    const auth = getAuth(app);
    return auth?.currentUser;
  }

  return { authSignup, authSignIn, authSignOut, authDetails, getAuthStatus };
}
