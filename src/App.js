import { App as Appp } from "./styles";
import { ContextProvider } from "./data/AppContext";

import Main from "./components/Main/Main";

function App() {
  return (
    <Appp className="App">
      <ContextProvider>
        <Main />
      </ContextProvider>
    </Appp>
  );
}

export default App;
