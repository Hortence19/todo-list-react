import { useTodos } from "./hooks/useTodos.tsx";
import { useFetch } from "./hooks/useFetch.ts";
import type { ApiResponse, Task, TaskServer } from "./interfaces.ts";
import { Button } from "./components/button.tsx";

export const Todos = () => {
  const {setAction,handleForm} = useTodos()
  const {data:response ,isLoading,error} = useFetch<ApiResponse<TaskServer>>("https://todo-api-express-wu7q.onrender.com/api/todos")
  const tasks = response?.data || []

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
          {isLoading && <div>Loading...</div>}
          {error && <div style={{color:'red'}}>{error}</div>}
          {tasks?.map((task) => (
            <div key={task.id} style={{ border: "1px solid", padding: 10 }}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="action" style={{ display: "flex", gap: 10 }}>
                <button onClick={() => {setAction('update')} }>✏️</button>
                <button>🗑️ </button>
              </div>
             {/* <div>
                {action === 'update' && <TaskForm handleForm={handleForm} task={task}/>}
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

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
    <Button  type="submit"> { !task ? "Ajouter" :"Modifier"} </Button>
  </form>
}
