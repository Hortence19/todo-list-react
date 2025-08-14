import { useTodos } from "./hooks/useTodos.tsx";
import type {  Task, TaskServer } from "./interfaces.ts";
import { Input } from "./components/Input.tsx";
import { SubmitButton } from "./components/submit-button.tsx";

export const Todos = () => {
  const {setAction,handleForm,tasks,isLoading,error} = useTodos()


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
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {tasks?.map((task) =>
              <TaskCard task={task} key={task.id} setAction={setAction}/>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

const TaskCard = ({task,setAction}:{task:TaskServer,setAction:(action:'update'|'create') => void}) => {
  return <div key={task.id} className='border border-neutral-700/40 rounded px-4 bg-gray-100 '>
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
}

const TaskForm = ({handleForm,task}:{handleForm:(formData:FormData,task?:Task) => void,task?:Task}) => {


  return  <form
    action={(formData) => handleForm(formData,task)}
    style={{ display: "flex", gap: 10, alignItems: "center" }}
  >
    <Input
      type="text"
      name="name"
      placeholder="Nom de la tache"
      required
      defaultValue={task?.name}
    />
    <Input
      required
      type="text"
      placeholder="Nouvelle tâche"
      name="content"
      defaultValue={task?.content}
    />
    <SubmitButton> { !task ? "Ajouter" :"Modifier"} </SubmitButton>
  </form>
}
