import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (search) => {
  
    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getImages = async ()=>{     
      const newImages =  await getGifs(search);
      setImagenes(newImages);
      setLoading(false);
    }  
     
    useEffect(() => {
         getImages()
    }, [imagenes]) 
    
    return {
        imagenes,
        loading,
    };
}
