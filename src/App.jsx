import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./pages";


function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
