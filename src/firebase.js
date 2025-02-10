
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBNBZE93hxgjCfrzHLc9gQTKyaaDl6qSzA",
  authDomain: "netflix-clone-32049.firebaseapp.com",
  projectId: "netflix-clone-32049",
  storageBucket: "netflix-clone-32049.firebasestorage.app",
  messagingSenderId: "1070094139980",
  appId: "1:1070094139980:web:96fd479444aa1de1e36ae9"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db =getFirestore(app);

const signup = async (name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
         
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const login= async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);

    } catch (error) {
        console.log(error);
        toast.error(error.code);
    }
}

const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};