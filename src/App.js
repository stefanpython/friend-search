import "./App.css";
import Nav from "./components/Nav";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/CreatePost";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/user/:userId" element={<SinglePost />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
