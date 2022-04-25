import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firebaseApp, DB_Reference } from "../firebase-config";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function loginHandler() {
    const provider = new GoogleAuthProvider();
    const firebaseAuth = getAuth(firebaseApp);

    try {
      const res = await signInWithPopup(firebaseAuth, provider);
      const { user } = res;
      const { providerData, refreshToken } = user;

      localStorage.setItem("user", JSON.stringify(providerData));
      localStorage.setItem("token", JSON.stringify(refreshToken));

      // add user to "users DB"

      // const {
      //   displayName: name,
      //   email,
      //   photoURL: imageUrl,
      //   uid: userID,
      // } = providerData[0];

      const data = providerData[0];
      // set to db async
      await setDoc(doc(DB_Reference, `users`, data.uid), data);

      //   navigate users to home page "/"
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error, "login page");
    }
  }

  return (
    <main className="h-screen bg-center bg-cover bg-[url('/src/img/login-bg.jpg')]">
      <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Your personal video library
        </h1>
        <div className="mt-6">
          <button
            className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-black bg-white bg-opacity-75 border border-transparent rounded-md sm:hover:bg-opacity-50"
            onClick={loginHandler}
          >
            <FcGoogle /> <span>Signin with Google</span>
          </button>
        </div>
      </div>
    </main>
  );
}
