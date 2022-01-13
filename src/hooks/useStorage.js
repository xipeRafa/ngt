import { useState } from 'react';
import { firestoreApp, storageApp } from '../config/firebase';


const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(null);

  let auctions = Date.parse(new Date().toDateString())+'si'

  useState(() => {
    const storageRef = storageApp.ref(data.itemImage.name);
    const collectionRef = firestoreApp.collection(auctions);

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
