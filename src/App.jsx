import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import AppWrapper from "./Components/AppWrapper/AppWrapper";
import Navbar from "./Components/Navbar/Navbar";
import { useRef, useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Photo from "./Pages/Photo/Photo";

const App = () =>{
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const[query, setQuery] = useState('');

    useEffect(() =>{
      if(query) navigate(query); 
    } ,[query])

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

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path=":query" element={<Gallery/>} />
          <Route path=":query/:id" element={<Photo/>} />
        </Routes>
      </AppWrapper>
    </>
  );
}

export default App;
