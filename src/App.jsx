import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Places } from "./pages";


function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/places" element={<Places/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
