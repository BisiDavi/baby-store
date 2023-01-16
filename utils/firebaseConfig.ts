import { getDatabase, ref, onValue } from "firebase/database";
import { getApp, initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const createFirebaseApp = () => {
  try {
    return getApp();
  } catch (err) {
    return initializeApp(firebaseConfig);
  }
};

export function initFB() {
  const app = createFirebaseApp();
  return app;
}

export function initializeDB() {
  const app = initFB();
  const db = getDatabase(app);
  return db;
}

// const messaging =
//   process.env.NODE_ENV === "production" ? getMessaging(app) : null;

export function readData(dbNode: string, dataValue: any, setData: any) {
  const db = initializeDB();
  const dataRef = ref(db, dbNode);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    if (dataValue === null) {
      setData(data);
    }
  });
}
