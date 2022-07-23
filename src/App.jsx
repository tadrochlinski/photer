import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import AppWrapper from "./Components/AppWrapper/AppWrapper";
import Navbar from "./Components/Navbar/Navbar";
import { useRef, useState } from "react";

const App = () =>{
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const inputValue = inputRef.current.value;
    setQuery(inputValue);
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

      </AppWrapper>
    </>
  );
}

export default App;
