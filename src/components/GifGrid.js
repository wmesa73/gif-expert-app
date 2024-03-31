import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    //data:images renombra data para usarlo como images
    const {data:images,loading} = useFetchGifs(category);

  return (
    <>
        <h3 className='card animate__animated animate__fadeIn'> { category } </h3>
        {loading && <p className='card animate__animated animate__flash'>Cargando...</p>}
         <div className='card-grid'>
            {
            images.map((img) => (
                < GifGridItem 
                    key = {img.id}
                    {...img} />)
            )
            }
        </div>
     </>
  )
}

export default GifGrid
