import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const config={
    apiKey: "AIzaSyD4p_Hs8w-erj-TO-yVOK5NbMcvNZZ6EPE",
    authDomain: "whatsapp-clone-73d56.firebaseapp.com",
    projectId: "whatsapp-clone-73d56",
    storageBucket: "whatsapp-clone-73d56.appspot.com",
    messagingSenderId: "186452135866",
    appId: "1:186452135866:web:55d760921c1029a7269783",
    measurementId: "G-WFDCKXF32R"
}

const app=initializeApp(config)
export const auth=getAuth(app)