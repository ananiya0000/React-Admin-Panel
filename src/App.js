import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./Pages/home/home"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UserList from "./Pages/userList/userList"

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/users' element={<UserList />}/>
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;
