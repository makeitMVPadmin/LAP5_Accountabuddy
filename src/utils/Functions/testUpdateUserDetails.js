const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const updateUserDetails = require( './src/utils/Functions/functions.js');
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testUpdateUserDetails() {
    const id = '44';
    const updatedData = {
        email: "testtravis123@gmail.com",
        firstName: "Travis",
        lastName: "J.",
        linkedin: "testtravis@linkedin.com",
        matchedWith: "n/a",
        profile: "America",
        role: "developer",
        skills: "python",
    };

try {
    // Update user details
    await updateUserDetails(id, updatedData);
    console.log("User details updated successfully");
} catch (error) {
    console.log("Error updating user details:", error);
}
}

testUpdateUserDetails();
