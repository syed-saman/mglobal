// ================================================================
// MGlobal — Firebase Configuration
// ================================================================
// PLACEHOLDER: Replace values below with your actual Firebase
// project credentials from https://console.firebase.google.com
// ================================================================

const firebaseConfig = {
  apiKey:            "AIzaSyDxWOtV4aqGLzM9slnLBrrA1Z40R7D5ZqE",
  authDomain:        "mglobal-2ac3e.firebaseapp.com",
  projectId:         "mglobal-2ac3e",
  storageBucket:     "mglobal-2ac3e.firebasestorage.app",
  messagingSenderId: "894455219282",
  appId:             "1:894455219282:web:401dfdad93ae7f8e6fcb8b",
  measurementId:     "G-Z8F60BLPX3"
};

// Initialize Firebase (using compat SDK loaded via CDN in HTML)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');
