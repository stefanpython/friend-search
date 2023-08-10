import "./App.css";
import Nav from "./components/Nav";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/user/:userId" element={<SinglePost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
