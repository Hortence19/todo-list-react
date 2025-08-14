import { useState } from "react";
import type { ApiResponse, Task, TaskServer } from "../interfaces.ts";
import { useFetch } from "./useFetch.ts";

export const useTodos = () => {
  const {data:response ,isLoading,error} = useFetch<ApiResponse<TaskServer>>("https://todo-api-express-wu7q.onrender.com/api/todos")
  const tasks = response?.data || []
 // const [tasks, setTasks] = useState<TaskServer[]>(defaultTasks);
  const [action,setAction] = useState<'create'|'update'>('create');

  const handleForm = async (formData: FormData,task?:Task) => {
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    if(action === 'update'){

    }else {
     // const newTask: Task = { id: Date.now(), name, content };
      try {
        const task = await fetch('https://todo-api-express-wu7q.onrender.com/api/todos',{
          method:'POST',
          body:JSON.stringify({title:name,description:content}),
          headers:{
            'Content-type':'application/json'
          }
        }).then(res => res.json())
        console.log(task)
      }catch (e){
        console.log(e)
      }

    }

  };

  const addTask = (task: TaskServer) => {
    //setTasks([...tasks, task]);
  };

  const updateTask = (task: TaskServer) => {
    const newTasks =  tasks.map((t) => t.id === task.id ? task : t);
   // setTasks(newTasks);
  }
  return {tasks,handleForm,setAction,action,isLoading,error}
}