export interface Task {
  id: number;
  name: string;
  content: string;
}

export interface TaskServer{
  id:number;
  title:string;
  description:string;
  done:boolean;
}
export interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}

export interface ApiResponse<T>{
  pagination:{
    pageSize:number,
    currentPage:number,
    totalPages:number,
    totalItems:number,
  }
  data:T[]
}