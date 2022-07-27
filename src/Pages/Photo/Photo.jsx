import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import PhotoWrapper from './PhotoWrapper';

const Photo = () =>{
    const { id } = useParams();
    const[photo, setPhoto] = useState({});
    const[src, setSrc] = useState('');

    useEffect(() =>{
        const fetchPhotos = async () =>{
            const url = `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_ACCESS_KEY}`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPhoto(data);
            setSrc(data.urls.regular);
        }

        fetchPhotos();
    }, [id])

    return(
        <PhotoWrapper>
            <h1>{(photo.alt_description) ? photo.alt_description : 'untitled'}</h1>
            <button>download</button>
            <button>get back</button>
            <img src={src} alt={photo.alt_description} />
        </PhotoWrapper>
    );
}

export default Photo