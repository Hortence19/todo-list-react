import "./App.css";
import { Todos } from "./todos.tsx";
import { useState } from "react";
import { Posts } from "./posts.tsx";
import { Button } from "./components/button.tsx";


function App() {
  const [currentPage, setCurrentPage] = useState<'todos'|'posts'>('todos');
return <>
  <nav style={{ display: "flex", gap: 10, marginBottom: 10 }}>
    <Button onClick={() => setCurrentPage('todos')} >Todos</Button>
    <Button onClick={() => setCurrentPage('posts')}>Posts</Button>
  </nav>
  {currentPage === 'todos' && <Todos/>}
  {currentPage === 'posts' && <Posts/>}
</>
}

export default App;
