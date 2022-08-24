import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import PhotoWrapper from './PhotoWrapper';
import Button from '../../Components/Buttons/Button';

const Photo = () =>{
    const { query, id } = useParams();
    const[photo, setPhoto] = useState({});
    const[src, setSrc] = useState('');
    const[download, setDownload] = useState('');

    useEffect(() =>{
        const fetchPhotos = async () =>{
            try{
                const url = `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_ACCESS_KEY}`
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setPhoto(data);
                setSrc(data.urls.regular);
                setDownload(data.links.download);
            } catch{
                console.log('error');
            }
        }

        fetchPhotos();
    }, [id])

    return(
        <PhotoWrapper>
            <h1>{(photo.alt_description) ? photo.alt_description : 'untitled'}</h1>
            <div>
                <form action={download} target="_blank"><Button primary>download</Button></form>
                <Link to={`../${query}`}><Button>back</Button></Link>
            </div>
            <img src={src} alt={photo.alt_description} />
        </PhotoWrapper>
    );
}

export default Photo