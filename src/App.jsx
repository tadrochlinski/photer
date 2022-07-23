import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import AppWrapper from "./Components/AppWrapper/AppWrapper";

const App = () =>{
  return (
    <>
      <GlobalStyles/>
      <AppWrapper>
        <nav>
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
        </nav>

      </AppWrapper>
    </>
  );
}

export default App;
