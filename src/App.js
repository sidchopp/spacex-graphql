import { useGlobalContext } from "./components/Context";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Launches from "./components/Launches";
import Rockets from "./components/Rockets";
import AboutCompany from "./components/AboutCompany";

function App() {
  const { client } = useGlobalContext();
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<AboutCompany />}></Route>
          <Route path="/rockets" element={<Rockets />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
