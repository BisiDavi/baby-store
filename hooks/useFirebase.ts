import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signOut,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

import { createFirebaseApp } from "@/utils/firebaseConfig";
import useUI from "./useUI";

export default function useFirebase() {
  const { authModalHandler } = useUI();

  function initFB() {
    const app = createFirebaseApp();
    return app;
  }
  function getAuthdetails() {
    const app = initFB();
    const auth = getAuth(app);
    const user = auth.currentUser;
    const currentUser: any = {};
    if (user !== null) {
      currentUser.displayName = user.displayName;
      currentUser.email = user.email;
      currentUser.photoURL = user.photoURL;
      currentUser.emailVerified = user.emailVerified;
      currentUser.uid = user.uid;
    } else {
      return null;
    }
    return currentUser;
  }

  function initializeDB() {
    const app = initFB();
    const db = getDatabase(app);
    return db;
  }

  function writeData(data: any, dbNode: string) {
    const db = initializeDB();
    return set(ref(db, dbNode), data);
  }

  function readData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  function deleteData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    return remove(dataRef);
  }

  function googleProvider() {
    const app = initFB();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      writeData(JSON.stringify(user), `/users/${user.uid}/`).then(() => {
        toast.success(`Welcome, ${user?.displayName}`);
        authModalHandler();
      });
    });
  }

  function authSignOut() {
    const app = initFB();
    const auth = getAuth(app);
    return signOut(auth).then(() => toast.success("logout successful"));
  }

  return {
    getAuthdetails,
    initFB,
    writeData,
    readData,
    deleteData,
    googleProvider,
    authSignOut,
  };
}
