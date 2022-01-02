import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = ref(projectStorage, file.name)
        const collectionRef = collection(projectFirestore, 'images')

        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed', snap => {
            let percentage = (snap.bytesTransferred  / snap.totalBytes) * 100
            setProgress(percentage)
        },
        err => setError(err),
        async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            // const url = getDownloadURL(storageRef)
            const createdAt = timestamp()
            await addDoc(collectionRef, {
                url,
                createdAt
            })

            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage