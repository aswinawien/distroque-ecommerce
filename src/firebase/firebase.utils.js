import FirebaseApp from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPv0XMlAdNhw9uxZLqzIwuojY7yAcGbD0",
  authDomain: "distroque-fd49d.firebaseapp.com",
  databaseURL: "https://distroque-fd49d.firebaseio.com",
  projectId: "distroque-fd49d",
  storageBucket: "distroque-fd49d.appspot.com",
  messagingSenderId: "557081500186",
  appId: "1:557081500186:web:396dc9c013748555ec0fa3",
  measurementId: "G-9550CMFJGK"
};

FirebaseApp.initializeApp(config);

const auth = FirebaseApp.auth();
const firestore = FirebaseApp.firestore();

const provider = new FirebaseApp.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then(res => {
    window.location = "/";
  });

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      const user = {
        displayName,
        email,
        photoURL,
        phoneNumber,
        createdAt,
        ...additionalData
      };
      await userRef.set(user);
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};

// const addCollectionAndDocuments = async objectsToAdd => {
//   const collectionRef = firestore.collection(`collections`);
//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export {
  auth,
  firestore,
  signInWithGoogle,
  createUserProfileDocument,
  // addCollectionAxndDocuments,
  convertCollectionsSnapshotToMap
};

export default FirebaseApp;
