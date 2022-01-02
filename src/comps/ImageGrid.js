import { motion } from 'framer-motion'
import React from 'react'
import useFirestore from '../hooks/useFirestore'

export const ImageGrid = ({setSelectedImage}) => {
    const { docs } = useFirestore('images')
    

    return <div className='img-grid'>
        { docs && docs.map(doc => (
            <motion.div
                layout
                whileHover={{ opacity: 1 }}
                className='img-wrap' 
                key={doc.id} 
                onClick={() => setSelectedImage(doc.url)}>
                    <motion.img
                     src={doc.url} 
                     alt='uploaded picture'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }} />
            </motion.div>
        )) }
    </div>
}