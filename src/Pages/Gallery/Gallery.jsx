import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GalleryWrapper from './GalleryWrapper';

const Gallery = () =>{
    const [photos, setPhotos] = useState([]);  
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchPhotos = async () =>{
          const url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.results);
          setPhotos(data.results);
        }
    
        if(query) fetchPhotos();
      }, [query]);

      const handleClick = (e) =>{
        const selected = e.target.closest('div');
        const imageId = selected.id;
        navigate(imageId);
      }

  return (
    <GalleryWrapper>
      {photos.map(({ alt_description, urls:{ regular }, id}) =>(
        <div key={id} onClick={handleClick} id={id}>
          <img src={regular} alt={alt_description} />
        </div>
      ))}
    </GalleryWrapper>
  )
}

export default Gallery