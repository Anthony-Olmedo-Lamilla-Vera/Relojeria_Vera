const firebase = require("firebase/app").default;
const firestore = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAWm3ufmkJpDQZmQC1duExp4MTS7PlrUlU",
  authDomain: "shoprelojes-a5ef4.firebaseapp.com",
  projectId: "shoprelojes-a5ef4",
  storageBucket: "shoprelojes-a5ef4.appspot.com",
  messagingSenderId: "1036965777062",
  appId: "1:1036965777062:web:830ad8099f2a3181b92e67",
};

// Get a reference to the storage service, which is used to create references in your storage bucket
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const relojes = [
  {
    id: 1,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 2,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 3,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 4,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 5,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 6,
    precio: 20,
    categoria: "reloj",
  },

  {
    id: 7,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 8,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 9,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 10,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 11,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 12,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 13,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 14,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 15,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 16,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 17,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 18,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 19,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 20,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 21,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 22,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 23,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 24,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 25,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 26,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 27,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 28,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 29,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 30,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 31,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 32,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 33,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 34,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 35,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 36,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 37,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 38,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 39,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 40,
    precio: 20,
    categoria: "reloj",
  },
  {
    id: 41,
    precio: 20,
    categoria: "reloj",
  },
];

/*export const firestoreimg = relojes.map((x) =>
  db.collection("Productos").add({
    ...x,
    url: `https://firebasestorage.googleapis.com/v0/b/shoprelojes-a5ef4.appspot.com/o/${x.id}.jpg?alt=media&token=68719bd4-3adc-4e7d-8568-d9692dfab1bd`,
  })
);*/
//console.log(img);
