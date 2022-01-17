import React from "react";
import { Route ,Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route  path="/" element = {<Home/>} ></Route>
      <Route  path="/add" element = {<AddPost/>} ></Route>
      <Route  path="/edit/:id" element = {<EditContact/>} ></Route>
      {/* <Route  path="/add" component={() => <AddPost />} /> */}
        {/* <Route  path="/edit/:id" component={() => <EditContact />} /> */}
        </Routes>
    </div>
  );
};
export default App;
