import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: " task 1",
      content: "do your exercice",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const AddTask = () => {
    const newTaskObj = {
      id: Date.now(),
      name: `task ${tasks.length + 1}`,
      content: newTask,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <form
          action="#"
          onSubmit={AddTask}
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <input
            required
            type="text"
            placeholder="Nouvelle tâche"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
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
