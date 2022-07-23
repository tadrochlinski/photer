import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import AppWrapper from "./Components/AppWrapper/AppWrapper";
import Navbar from "./Components/Navbar/Navbar";
import { useRef, useState, useEffect} from "react";

const App = () =>{
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

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

  const handleSubmit = (e) =>{
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if(inputValue) setQuery(inputValue);
  }

  return (
    <>
      <GlobalStyles/>
      <AppWrapper>
        <Navbar>
          <h1>Photer 📷</h1>
          <form onSubmit = {handleSubmit}>
            <input 
            type="text" 
            placeholder="e.g. apple"
            ref={inputRef}
            />
            <button type="submit">
              search
            </button>
          </form>
        </Navbar>

        <ul>
          {photos.map(photo => (<li key={photo.alt_description}>{photo.alt_description}</li>))}
        </ul>
      </AppWrapper>
    </>
  );
}

export default App;
