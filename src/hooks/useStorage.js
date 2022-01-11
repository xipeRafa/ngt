import { useState } from 'react';
import { firestoreApp, storageApp } from '../config/firebase';

/* let days = []

for (let index = 0; index < 40; index++) {
  days.push(1641798000000+(86400000*index))  // 172 800 000  2 dias 
}

let manana = days.find(el => el > Date.now())
let Now = manana - 86400000
let auctions= Now.toString() */


const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(null);



  useState(() => {
    const storageRef = storageApp.ref(data.itemImage.name);
    const collectionRef = firestoreApp.collection('auctions');

    storageRef.put(data.itemImage).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      }, (err) => {
        console.log(err);
      },
      async () => {
        const imgUrl = await storageRef.getDownloadURL();
        delete data.itemImage; 
        await collectionRef.add({ ...data, imgUrl });
        setIsCompleted(true);
      }
    );
  }, [data]);

  return { progress, isCompleted };
};

export default useStorage;
