import firebase from "./firebase";

export function getLists() {
    return firebase.firestore().collection('lists')
        .get()
        .then(snapshot => {
            const items = [];
            snapshot.forEach((doc) => {
                items.push(doc.data());
            });
            console.log('itemsLists list+++', items);
            return items;
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export function getPath(path) {
    return firebase.firestore().collection('lists')
        .where("path", "==", path)
        .get()
        .then(snapshot => {
            const items = [];
            snapshot.forEach((doc) => {
                items.push(doc.data());
            });
            console.log('itemsMessages path+++', items);
            return items;
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export function createTitle(data) {
    return firebase.firestore().collection('lists').add({
        ...data,
        completed: false
    })
        .then(docRef => docRef.get())
        .then(doc => console.log("doc---",doc))
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

// export function getMessages() {
//     const collection = firebase.firestore().collection('messages');
//     return (query = () => collection) => {
//         return query(collection).get()
//             .then(snapshot => {
//                 const items = [];
//                 snapshot.forEach((doc) => {
//                     items.push(doc.data());
//                 });
//                 console.log('items+++', items);
//                 return items;
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//     }
// }
