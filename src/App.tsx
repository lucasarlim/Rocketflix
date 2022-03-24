import { MovieContextProvider } from "./contexts/MovieContextType";
import { Routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  return (
    <MovieContextProvider>
      <GlobalStyles />
      <Routes />
    </MovieContextProvider>
  )
}

export default App
