import "./App.css";
import { Todos } from "./todos.tsx";
import { useState } from "react";
import { Posts } from "./posts.tsx";


function App() {
  const [currentPage, setCurrentPage] = useState<'todos'|'posts'>('todos');
return <>
  <nav style={{ display: "flex", gap: 10, marginBottom: 10 }}>
    <button onClick={() => setCurrentPage('todos')}>Todos</button>
    <button onClick={() => setCurrentPage('posts')}>Posts</button>
  </nav>
  {currentPage === 'todos' && <Todos/>}
  {currentPage === 'posts' && <Posts/>}
</>
}




export default App;
