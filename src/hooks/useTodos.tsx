import { useState } from "react";
import type { Task } from "../App.tsx";

export const useTodos = () => {
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
  return {tasks,handleForm,setAction,action}
}