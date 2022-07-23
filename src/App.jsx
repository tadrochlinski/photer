import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import AppWrapper from "./Components/AppWrapper/AppWrapper";
import Navbar from "./Components/Navbar/Navbar";

const App = () =>{
  return (
    <>
      <GlobalStyles/>
      <AppWrapper>
        <Navbar>
          <h1>Photer 📷</h1>
          <form>
            <input 
            type="text" 
            placeholder="e.g. apple"
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
