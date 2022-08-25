import { initializeApp } from "firebase/app"


const firebaseConfig = {
apiKey: "AIzaSyBj2D6Gns1AiaAi4uCY4MH2jQyrh2gAm9M",
authDomain: "vivero-ecommerce.firebaseapp.com",
projectId: "vivero-ecommerce",
storageBucket: "vivero-ecommerce.appspot.com",
messagingSenderId: "646979278536",
appId: "1:646979278536:web:8f749f7ae752ba0fd0f7fd"
}


const app = initializeApp(firebaseConfig)

export const firebaseConnections = () => app