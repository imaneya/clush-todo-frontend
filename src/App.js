import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Join from "./pages/join";
import Home from "./pages/home";
import DbInfo from "./pages/dbinfo";
import List from "./pages/list";
import RouteTest from "./components/routeTest";
import DatePicker2 from "./components/datePicker2";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/dbinfo" element={<DbInfo/>}></Route>
          <Route path="/list" element={<List/>}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}


export default App;
