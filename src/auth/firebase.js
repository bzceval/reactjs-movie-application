import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//burada biz config ayarlarını yapacağız, kendimizi tanıtacağız.
const firebaseConfig = {
  // ...
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
// burada da config ayarlarını initializ edeceğiz yani başlatacağızs
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// son olarak initialize ettiğimiz config ayarlarını bir değişkene aktararak diğer sayfalarda kullanacağız
const auth = getAuth(app);