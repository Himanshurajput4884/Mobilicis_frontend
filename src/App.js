import Header from "./components/Header";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import GetData from "./components/GetData";

function App() {  
  return (
    <div className="cont">
        <div className="cont">
          <Header />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/type/:id" element={<GetData />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Sidebar>
        </div>
    </div>
  );
}

export default App;
