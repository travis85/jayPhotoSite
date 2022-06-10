
import {React, Image} from 'react'
import  { firestore } from "./firebase"
import { collection, onSnapshot, query} from "firebase/firestore"; 
import { useEffect, useState} from 'react'

export default function Photos() {

  const [photosFromDb, setPhotoFromDb] = useState([])
  

  useEffect(() => {

    const collectionRef = collection(firestore,"album")
    const photosQuery = query(collectionRef)
    // onsnapshot is used so the data will update itself
    onSnapshot(photosQuery, (snapshot) =>{ 

      setPhotoFromDb(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(photosFromDb)
    })
  },[]);


  return (
    <div className='grid grid-cols-3'>
      {photosFromDb.map((photo) => {
        
        return (
          <div className=''>
            <img  className='aspect-square h-40' src={photo.photo} alt='' />

          </div>
        )
      })

     } 
     </div>
   )

}
