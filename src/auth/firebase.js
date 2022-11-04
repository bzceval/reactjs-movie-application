import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//burada biz config ayarlarını yapacağız, kendimizi tanıtacağız.
const firebaseConfig = {
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


//SIGN UP NEW USER
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// bu method yeni bir kullanıcı oluşturur.
// 3 parametre alır authu zaten yukarıda oluşturduk
// email ve passwordları da register inputlardan alarak parametrelerle göndereceğiz
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// bundan önce try catch bloğu olduğundan async bir methoddur. 
// içerisinde bir fn oluşturacağuz ve email, password parametreleri göndereceğiz.
// sonrada kullanmak istediğim yerde bu fni çağıracağız.
// NOT başka yerde kullanmam için bu fni export etmeliyim
export const createUser = async (email, password) => {
  // yeni kullanıcı oluşturmak için firebase hazır methodu
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
  } catch (error) {
    console.log(error)
  }
}