import { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  name: string;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const newTask: Task = { id: Date.now(), name, content };
    addTask(newTask);
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <form
          action={handleForm}
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nom de la tache"
            required
          />
          <input
            required
            type="text"
            placeholder="Nouvelle tâche"
            name="content"
          />
          <button type="submit">Ajouter</button>
        </form>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {tasks.map((task) => (
            <div key={task.id} style={{ border: "1px solid", padding: 10 }}>
              <h3>{task.name}</h3>
              <p>{task.content}</p>
              <div className="action" style={{ display: "flex", gap: 10 }}>
                <button>✏️</button>
                <button>🗑️ </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
