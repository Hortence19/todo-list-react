import { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  name: string;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [action,setAction] = useState<'create'|'update'>('create');

  const handleForm = (formData: FormData,task?:Task) => {
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    if(action === 'update'){
      const exitedtask = tasks.find((t) => t.id ===task?.id)
      if(exitedtask){
        exitedtask.name = name;
        exitedtask.content = content;
        updateTask(exitedtask);
        setAction('create');
      }
    }else {
      const newTask: Task = { id: Date.now(), name, content };
      addTask(newTask);
    }

  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (task: Task) => {
    const newTasks =  tasks.map((t) => t.id === task.id ? task : t);
    setTasks(newTasks);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <TaskForm handleForm={handleForm} />
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
                <button onClick={() => {setAction('update')} }>✏️</button>
                <button>🗑️ </button>
              </div>
              <div>
                {action === 'update' && <TaskForm handleForm={handleForm} task={task}/>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


const TaskForm = ({handleForm,task}:{handleForm:(formData:FormData,task?:Task) => void,task?:Task}) => {


  return  <form
      action={(formData) => handleForm(formData,task)}
      style={{ display: "flex", gap: 10, alignItems: "center" }}
  >
    <input
        type="text"
        name="name"
        placeholder="Nom de la tache"
        required
        defaultValue={task?.name}
    />
    <input
        required
        type="text"
        placeholder="Nouvelle tâche"
        name="content"
        defaultValue={task?.content}
    />
    <button type="submit"> { !task ? "Ajouter" :"Modifier"} </button>
  </form>
}

export default App;
