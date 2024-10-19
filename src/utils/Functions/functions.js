// src/components/functions/functions.js
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
// const bcrypt = require('bcrypt'); // For hashing passwords

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// GET USER DETAILS
export const getUserDetails = async (user_id) => {
  try {
    // Step 1: Validate the input
    if (!user_id) {
      return { message: "User ID is required", status: 400 };
    }

    // Step 2: Get the user document from Firestore
    const userDocRef = doc(db, "Users", user_id); // Get reference to the user document
    const userSnapshot = await getDoc(userDocRef); // Fetch the document snapshot

    // Step 3: Check if the user exists
    if (!userSnapshot.exists()) {
      return { message: "User not found", status: 404 };
    }

    // Step 4: Extract user data
    const userData = userSnapshot.data();
    const {
      id,
      email,
      firstName,
      lastName,
      linkedin,
      matchedWith,
      profile,
      role,
      skills,
    } = userData; // Extract specific fields

    // Step 5: Return the user details
    return {
      message: "User details fetched successfully",
      status: 200,
      data: {
        id,
        email,
        firstName,
        lastName,
        linkedin,
        matchedWith,
        profile,
        role,
        skills,
      }, // Return the details
    };
  } catch (error) {
    console.error("Error fetching user details: ", error);
    return {
      message: "An error occurred while fetching user details",
      status: 500,
    };
  }
};

// UPDATE USER DETAILS
export const updateUserDetails = async (id, data) => {
  try {
    const docRef = doc(db, "Users", id);
    await updateDoc(docRef, data);
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// CREATE COLLABORATION ROOM
export const createCollaborationRoom = async (id, challengeId) => {
  try {
    const docRef = await addDoc(collection(db, "CollaborationRooms"), {
      id,
      challengeId,
    });
    return docRef.id;
  } catch (e) {
    console.error("Error creating document: ", e);
    throw e;
  }
};

// ADD USER TO COLLABORATION ROOM
export const addUserToCollaborationRoom = async (roomID, id) => {
  try {
    const docRef = doc(db, "CollaborationRooms", roomID);
    await updateDoc(docRef, { users: arrayUnion([id]) });
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// REMOVE USER FROM COLLABORATION ROOM
export const removeUserFromCollaborationRoom = async (roomID, id) => {
  try {
    const docRef = doc(db, "CollaborationRooms", roomID);
    await updateDoc(docRef, { users: arrayRemove([id]) });
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// PAIR USERS FOR COLLABORATION (REVIEW)
export const pairUsersForCollaboration = async () => {
  try {
    // Step 1: Fetch all available users for collaboration
    const usersSnapshot = await getDocs(collection(db, "Users"));
    const users = [];

    // Loop through the users and extract their skillsets
    usersSnapshot.forEach((doc) => {
      const userData = doc.data();
      // Only consider users who are available for a call (you can define this with a flag in your DB)
      if (userData.isAvailable) {
        users.push({
          id: doc.id,
          skillsets: userData.skillsets, // Array of user's skillsets
        });
      }
    });

    // Step 2: Find two users with matching skillsets
    let pairedUsers = null;
    for (let i = 0; i < users.length - 1; i++) {
      for (let j = i + 1; j < users.length; j++) {
        // Check if the two users have any common skills
        const commonSkills = users[i].skillsets.filter((skill) =>
          users[j].skillsets.includes(skill)
        );
        if (commonSkills.length > 0) {
          // We found two users with common skills, pair them together
          pairedUsers = [users[i], users[j]];
          break;
        }
      }
      if (pairedUsers) break; // Exit loop if a pair is found
    }

    if (pairedUsers) {
      // Step 3: Pair the users and create a collaboration room
      const collaborationRoomRef = await addDoc(
        collection(db, "CollaborationRooms"),
        {
          userIds: pairedUsers.map((user) => user.id),
          commonSkills: pairedUsers[0].skillsets.filter((skill) =>
            pairedUsers[1].skillsets.includes(skill)
          ),
          isActive: true,
        }
      );

      console.log(
        `Collaboration room created with ID: ${collaborationRoomRef.id}`
      );
      return {
        message: "Users paired successfully",
        roomId: collaborationRoomRef.id,
        status: 200,
      };
    } else {
      // No matching users found
      return { message: "No users with matching skillsets found", status: 404 };
    }
  } catch (error) {
    console.error("Error pairing users: ", error);
    return { message: "Error occurred during pairing", status: 500 };
  }
};

export const getAllChallengesData = async (collectionName) => {
  try {
    const challengeData = await getDocs(collection(db, collectionName));
    console.log(challengeData);
  } catch (e) {
    console.log(e);
  }
};

export const getAllJobsData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    console.log(dataList);
    return dataList;
  } catch (e) {
    console.log(e);
  }
};
// Create
export const createData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Read
export const readData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
};

// Update
export const updateData = async (collectionName, id, newData) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, newData);
    return true;
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};

// Delete
export const deleteData = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return true;
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};

//Get all questions
export const getAllQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
};

// Get all UserAnswers
export const getAllUserAnswers = throttle(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "UserAnswers"));
    const dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (e) {
    console.error("Error reading documents: ", e);
    throw e;
  }
});
