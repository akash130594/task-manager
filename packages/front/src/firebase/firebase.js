import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};



/*database.ref().set({
    name: "Akash",
    age:26,
    isSingle: true,
    stressLevel: 6,
    job: {
      title: 'Software Developer',
      company: "Sample Junction"
    },
    location: {
        city: 'Delhi',
        country: 'India'
    },
    state: 'UP',
}).then(() => {
    console.log("Data is saved");
}).catch((error) => {
    console.log("error: ", error)
});*/


/*database.ref('isSingle').remove().then(() => {
    console.log("Successfully Deleted!!");
}).catch((error) => {
    console.log("Error: ", error);
})*/


/*
database.ref('attributes').set({
    height: 175,
    weight: 66
}).then(() => {
    console.log("Data is saved!");
}).catch((error) => {
    console.log("error: ", error)
});*/


/*
database.ref().update({
    stressLevel: 9,
    'job/company': "Nethues",
    'location/city': "Delhi"
})*/


/*
database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
})

setTimeout(() => {
    database.ref('age').set(28)
}, 2000)
setTimeout(() => {
    database.ref('age').set(29)
}, 5000)*/


/*
database.ref().on('value', (snapshot) => {
    const details = snapshot.val();
    console.log(`${details.name} is a ${details.job.title} in ${details.job.company}`);
})

setTimeout(() => {
    database.ref('name').set('Akash Sharma')
}, 3500)*/

/*database.ref('expenses').push({
    description : "Coffee",
    note: "This is for coffee",
    amount: 20,
    createdAt: 1555
})


setTimeout(() => {
    database.ref('expenses').push({
        description : "Rent",
        note: "This is for rent",
        amount: 20,
        createdAt: 1555
    })
}, 1000)
setTimeout(() => {
    database.ref('expenses').push({
        description : "Tea",
        note: "This is for Tea",
        amount: 200,
        createdAt: 1555
    })
}, 2000)*/




/*
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses);
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

setTimeout(() => {
    database.ref('expenses').push({
        description : "Tea",
        note: "This is for Tea",
        amount: 200,
        createdAt: 1555
    })
}, 2000)*/
