import "./App.css";
import { Todos } from "./todos.tsx";
import { useState } from "react";
import { Posts } from "./posts.tsx";
import { Button } from "./components/button.tsx";
import {Header} from "./components/header.tsx";
import {Profile} from "./components/profile.tsx";
import {ProfileProvider} from "./providers/profile-provider.tsx";


function App() {
  const [currentPage, setCurrentPage] = useState<'todos'|'posts'|'profile'>('todos');
return <div>
    <ProfileProvider>
        <Header />
        <div className='px-5'>
            <nav style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Button onClick={() => setCurrentPage('todos')} >Todos</Button>
                <Button onClick={() => setCurrentPage('posts')}>Posts</Button>
                <Button onClick={() => setCurrentPage('profile')}>Profil</Button>

            </nav>
            <div className='px-5 container'>
                {currentPage === 'todos' && <Todos/>}
                {currentPage === 'posts' && <Posts/>}
                {currentPage === 'profile' && <Profile/>}
            </div>
        </div>

    </ProfileProvider>


</div>
}

export default App;
