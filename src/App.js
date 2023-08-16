import "./App.css";
import Nav from "./components/Nav";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/CreatePost";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <HashRouter>
        <Nav setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Routes>
          <Route path="/" element={<Post searchQuery={searchQuery} />} />
          <Route path="/user/:userId" element={<SinglePost />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
